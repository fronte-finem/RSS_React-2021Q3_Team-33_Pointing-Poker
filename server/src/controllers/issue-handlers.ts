import { GameService } from '@server/services/game-service';
import { ApiFailMessage } from '@shared/api-validation/api-fail-message';
import { ApiServerEvents } from '@shared/api-types/api-events';
import { PointingPokerServerSocket } from 'types/server-socket';
import { AckCallback, setFail, setOk } from '@shared/api-types/api-events-maps';
import { Issue, IssueBase, Priority } from '@shared/api-types/issue';
import { CardScore } from '@shared/api-types/game-card-settings';
import { ISSUE_TITLE_MAX_LENGTH } from '@shared/api-validation/api-constants';

const getPriorities = () => Object.values(Priority).join(', ');

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

const validateAddIssue = ({ title, priority }: IssueBase) => {
  if (!title) return ApiFailMessage.ISSUE_NEED_TITLE;
  if (title.length > ISSUE_TITLE_MAX_LENGTH)
    return `${ApiFailMessage.ISSUE_TITLE_TO_LONG}${ISSUE_TITLE_MAX_LENGTH}`;
  if (!priority)
    return `${ApiFailMessage.ISSUE_NEED_PRIORITY}${getPriorities()}`;
  return null;
};

export const getAddIssueHandler =
  (socket: PointingPokerServerSocket, game: GameService) =>
  (issueData: IssueBase, ackCallback: AckCallback<Issue>) => {
    const failMessage = validateAddIssue(issueData);
    if (failMessage) {
      ackCallback(setFail(failMessage));
      return;
    }
    if (game.issueService.isInStore(issueData)) {
      ackCallback(setFail(ApiFailMessage.SAME_TITLE_ISSUE_ALREADY_EXIST));
      return;
    }
    const issue = game.issueService.add(issueData);
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
    const failMessage = validateAddIssue(issue);
    if (failMessage) {
      ackCallback(setFail(failMessage));
      return;
    }
    const modifiedIssue = game.issueService.modify(issue);
    ackCallback(setOk(modifiedIssue));
    conditionalEmit(ApiServerEvents.ISSUE_EDITED, modifiedIssue, game);
  };

export const getRoundStartHandler =
  (socket: PointingPokerServerSocket, game: GameService) =>
  (issueId: string, ackCallback: AckCallback<string>) => {
    if (game.issueService.isRoundActive) {
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
        const results = game.issueService.end();
        game.server.to(game.room).emit(ApiServerEvents.ROUND_ENDED, results);
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
    const results = game.issueService.end();
    game.server.to(game.room).emit(ApiServerEvents.ROUND_ENDED, results);
  };

export const getScoreAddHandler =
  (socket: PointingPokerServerSocket, game: GameService) =>
  (score: CardScore, ackCallback: AckCallback<CardScore>) => {
    if (!game.issueService.isRoundActive) {
      ackCallback(setFail(ApiFailMessage.NO_ACTIVE_ROUND));
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

    if (game.gameSettings.autoOpenCards) {
      const plusDealer = game.gameSettings.dealerGamer ? 1 : 0;
      const gamersNum = game.userService.getGamers().length + plusDealer;
      const scoresNum = game.issueService.getRoundScore()!.scores.length;
      if (scoresNum < gamersNum) return;
      const results = game.issueService.end();
      game.server.to(game.room).emit(ApiServerEvents.ROUND_ENDED, results);
    }
  };
