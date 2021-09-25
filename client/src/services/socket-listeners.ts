import { PointingPokerClientSocket } from 'types/client-socket';
import { ApiServerEvents } from '@shared/api-types/api-events';
import { ModalState } from '@client/services/modal-state';
import { GameState } from '@client/services/game-state';

export interface SocketListenerSetterProps {
  socket?: PointingPokerClientSocket;
  modalState: ModalState;
  gameState: GameState;
}

export type SocketListenerSetter = (props: SocketListenerSetterProps) => void;

export const setDealerListeners: SocketListenerSetter = ({
  socket,
  modalState,
}) => {
  socket?.on(ApiServerEvents.ALLOW_USER_JOIN, (userToJoin, callback) =>
    modalState.initAllowUserToJoin({ userToJoin, callback })
  );
};

export const setUserListeners: SocketListenerSetter = ({
  socket,
  modalState,
}) => {
  socket?.on(ApiServerEvents.KICK_VOTE_STARTED, (kickVoteInit) =>
    modalState.initKickVote(kickVoteInit)
  );
  socket?.on(ApiServerEvents.KICKED, (message) =>
    modalState.initSystemMessage(message)
  );
};

export const setSharedListeners: SocketListenerSetter = ({
  socket,
  modalState,
  gameState,
}) => {
  socket?.on(ApiServerEvents.GAME_CANCELED, () => gameState.reset());
  socket?.on(ApiServerEvents.GAME_TITLE_CHANGED, (title) =>
    gameState.setTitle(title)
  );
  socket?.on(ApiServerEvents.USER_JOINED, (user) => {
    gameState.addUser(user);
    const userName = gameState.formatUser(user.id);
    modalState.initSystemMessage(`${userName} - joined`);
    modalState.addChatSystemMessage(user.id, 'joined');
  });
  socket?.on(ApiServerEvents.USER_DISCONNECTED, (userId) => {
    const userName = gameState.formatUser(userId);
    modalState.initSystemMessage(`${userName} - disconnected`);
    modalState.addChatSystemMessage(userId, 'disconnected');
    gameState.setUserDisconnected(userId);
  });
  socket?.on(ApiServerEvents.USER_KICK_RESULT, (kickResult) => {
    const { badUserId, reason } = kickResult;
    const userName = gameState.formatUser(badUserId);
    modalState.initSystemMessage(`${userName} - ${reason}`);
    modalState.addChatSystemMessage(badUserId, reason);
    gameState.setUserKickResult(kickResult);
  });
  socket?.on(ApiServerEvents.MESSAGE_POSTED, (message) => {
    modalState.addMessage(message);
  });
  socket?.on(ApiServerEvents.ISSUE_ADDED, (issue) => gameState.addIssue(issue));
  socket?.on(ApiServerEvents.ISSUE_DELETED, (issueId) =>
    gameState.deleteIssue(issueId)
  );
  socket?.on(ApiServerEvents.ISSUE_EDITED, (issue) =>
    gameState.modifyIssue(issue)
  );
  socket?.on(ApiServerEvents.GAME_STARTED, (payload) =>
    gameState.startGame(payload)
  );
  socket?.on(ApiServerEvents.GAME_ENDED, (results) =>
    gameState.endGame(results)
  );
  socket?.on(ApiServerEvents.ROUND_STARTED, (issueId) =>
    gameState.startRound(issueId)
  );
  socket?.on(ApiServerEvents.ROUND_ENDED, (issueScore) =>
    gameState.endRound(issueScore)
  );
  socket?.on(ApiServerEvents.SCORE_ADDED, (userId) =>
    gameState.progressRound(userId)
  );
};
