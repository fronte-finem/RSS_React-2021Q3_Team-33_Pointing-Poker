import { GameService } from '@server/services/game-service';
import { ApiFailMessage } from '@shared/api-validation/api-fail-message';
import { ApiServerEvents } from '@shared/api-types/api-events';
import { PointingPokerServerSocket } from 'types/server-socket';
import { AckCallback, setFail, setOk } from '@shared/api-types/api-events-maps';
import { Issue, IssueBase } from '@shared/api-types/issue';
import { CardScore } from '@shared/api-types/game-card-settings';
import {
  validateIssuePriority,
  validateIssueTitle,
} from '@shared/api-validation/issue';

const conditionalEmit = (
  event: ApiServerEvents,
  payload: any,
  game: GameService
) => {
  if (game.isStarted) {
    game.server.to(game.room).emit(event, payload);
  } else {
    game.dealerSocket.emit(event, payload);
  }
};

export const getAddIssueHandler =
  (socket: PointingPokerServerSocket, game: GameService) =>
  (issueData: IssueBase, ackCallback: AckCallback<Issue>) => {
    let failMessage = validateIssueTitle(
      issueData,
      game.issueService.getIssues()
    );
    if (failMessage) {
      ackCallback(setFail(failMessage));
      return;
    }
    failMessage = validateIssuePriority(issueData);
    if (failMessage) {
      ackCallback(setFail(failMessage));
      return;
    }
    if (game.issueService.isInStore(issueData)) {
      ackCallback(setFail(ApiFailMessage.SAME_TITLE_ISSUE_ALREADY_EXIST));
      return;
    }
    const issue = game.issueService.add(issueData);
    if (!issue) {
      ackCallback(setFail('Issue adding failed'));
      return;
    }
    ackCallback(setOk(issue));
    conditionalEmit(ApiServerEvents.ISSUE_ADDED, issue, game);
  };

export const getDeleteIssueHandler =
  (socket: PointingPokerServerSocket, game: GameService) =>
  (issueId: string, ackCallback: AckCallback<string>) => {
    if (!game.issueService.find(issueId)) {
      ackCallback(setFail(ApiFailMessage.ISSUE_NOT_FOUND));
      return;
    }
    game.issueService.delete(issueId);
    ackCallback(setOk(issueId));
    conditionalEmit(ApiServerEvents.ISSUE_DELETED, issueId, game);
  };

export const getModifyIssueHandler =
  (socket: PointingPokerServerSocket, game: GameService) =>
  (issue: Issue, ackCallback: AckCallback<Issue>) => {
    if (!game.issueService.find(issue.id)) {
      ackCallback(setFail(ApiFailMessage.ISSUE_NOT_FOUND));
      return;
    }
    let failMessage = validateIssueTitle(issue, game.issueService.getIssues());
    if (failMessage) {
      ackCallback(setFail(failMessage));
      return;
    }
    failMessage = validateIssuePriority(issue);
    if (failMessage) {
      ackCallback(setFail(failMessage));
      return;
    }
    const modifiedIssue = game.issueService.modify(issue);
    if (!modifiedIssue) {
      ackCallback(setFail('Issue modifying failed'));
      return;
    }
    ackCallback(setOk(modifiedIssue));
    conditionalEmit(ApiServerEvents.ISSUE_EDITED, modifiedIssue, game);
  };

export const getRoundStartHandler =
  (socket: PointingPokerServerSocket, game: GameService) =>
  (issueId: string, ackCallback: AckCallback<string>) => {
    if (game.issueService.isRoundActiveRun) {
      ackCallback(setFail(ApiFailMessage.ACTIVE_ROUND));
      return;
    }
    if (!game.issueService.find(issueId)) {
      ackCallback(setFail(ApiFailMessage.ISSUE_NOT_FOUND));
      return;
    }
    ackCallback(setOk(issueId));

    let timerId: null | NodeJS.Timer = null;

    if (game.gameSettings.timeout) {
      timerId = global.setTimeout(() => {
        if (!game.issueService.isRoundActive) return;
        const result = game.issueService.end();
        if (!result) return;
        game.server.to(game.room).emit(ApiServerEvents.ROUND_ENDED, result);
      }, 1000 * game.gameSettings.timeout);
    }

    game.issueService.start(issueId, timerId);
    game.server.to(game.room).emit(ApiServerEvents.ROUND_STARTED, issueId);
  };

export const getRoundEndHandler =
  (socket: PointingPokerServerSocket, game: GameService) =>
  (ackCallback: AckCallback<true>) => {
    if (!game.issueService.isRoundActive) {
      ackCallback(setFail(ApiFailMessage.NO_ACTIVE_ROUND));
      return;
    }
    ackCallback(setOk(true));
    const result = game.issueService.end();
    if (!result) return;
    game.server.to(game.room).emit(ApiServerEvents.ROUND_ENDED, result);
  };

export const getScoreAddHandler =
  (socket: PointingPokerServerSocket, game: GameService) =>
  (score: CardScore, ackCallback: AckCallback<CardScore>) => {
    const isNoRound = !game.issueService.isRoundActive;
    const isRoundStopped = !game.issueService.isRoundActiveRun;
    const isAfterRoundForbidden = !game.gameSettings.changeAfterRoundEnd;

    if (isNoRound) {
      ackCallback(setFail(ApiFailMessage.NO_ACTIVE_ROUND));
      return;
    }
    if (isRoundStopped && isAfterRoundForbidden) {
      ackCallback(setFail(ApiFailMessage.ADD_SCORE_AFTER_ROUND_UNSET));
      return;
    }

    const userId = socket.id;
    if (!game.gameSettings.dealerGamer && userId === game.dealerSocket.id) {
      ackCallback(setFail(ApiFailMessage.DEALER_NOT_GAMER));
      return;
    }

    game.issueService.addScore({ userId, score });
    ackCallback(setOk(score));
    game.server.to(game.room).emit(ApiServerEvents.SCORE_ADDED, userId);

    if (isRoundStopped && !isAfterRoundForbidden) {
      const result = game.issueService.getRoundScore();
      if (!result) return;
      game.server.to(game.room).emit(ApiServerEvents.ROUND_ENDED, result);
      return;
    }

    if (game.gameSettings.autoOpenCards) {
      autoOpenCards(game);
    }
  };

function autoOpenCards(game: GameService) {
  const plusDealer = game.gameSettings.dealerGamer ? 1 : 0;
  const gamersNum = game.userService.getGamers().length + plusDealer;
  const scoresNum = game.issueService.getRoundScore()!.scores.length;
  if (scoresNum < gamersNum) return;
  const results = game.issueService.end();
  if (!results) return;
  game.server.to(game.room).emit(ApiServerEvents.ROUND_ENDED, results);
}
