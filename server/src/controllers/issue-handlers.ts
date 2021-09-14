import { GameService } from '@server/services/game-service';
import { ApiFailMessage } from '@server/api-fail-message';
import { ApiServerEvents } from '@shared/api-types/api-events';
import { PointingPokerServerSocket } from 'types/server-socket';
import { AckCallback, setFail, setOk } from '@shared/api-types/api-events-maps';
import { Issue, IssueBase, Priority } from '@shared/api-types/issue';

const TITLE_MAX_LENGTH = 50;

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
  if (title.length > TITLE_MAX_LENGTH)
    return `${ApiFailMessage.ISSUE_TITLE_TO_LONG}${TITLE_MAX_LENGTH}`;
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
