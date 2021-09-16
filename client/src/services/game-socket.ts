import { GameStateActions } from '@client/services/game-state';
import { PointingPokerClientSocket } from 'types/client-socket';
import { DealerToJoin, UserToJoin } from '@shared/api-types/user';
import { ApiClientEvents, ApiServerEvents } from '@shared/api-types/api-events';
import { action, runInAction } from 'mobx';
import { AckResponse, isFail, isOk } from '@shared/api-types/api-events-maps';
import {
  connect,
  emitWithCallback,
  emitWithPayloadAndCallback,
} from '@client/utils/socket.io';
import { Issue, IssueBase } from '@shared/api-types/issue';
import { CardScore, GameSettings } from '@shared/api-types/game-settings';

export interface SocketState {
  isLoading: boolean;
  isFail: boolean;
  failMessage: string;
}

export const getDefaultSocketState = () => ({
  isLoading: false,
  isFail: false,
  failMessage: '',
});

export class GameSocketActions {
  private socket?: PointingPokerClientSocket;

  constructor(
    private socketState: SocketState,
    private gameStateActions: GameStateActions
  ) {}

  public beforeAsync() {
    runInAction(() => {
      this.socketState.isLoading = true;
      this.socketState.isFail = false;
      this.socketState.failMessage = '';
    });
  }

  public afterAsync<T>(response: AckResponse<T>) {
    runInAction(() => {
      this.socketState.isLoading = false;
      if (isFail(response)) {
        this.socketState.isFail = true;
        this.socketState.failMessage = response.failMessage!;
      }
    });
  }

  private setListeners() {
    this.socket?.on(ApiServerEvents.GAME_CANCELED, () =>
      this.gameStateActions.reset()
    );
    this.socket?.on(ApiServerEvents.GAME_TITLE_CHANGED, (title) =>
      this.gameStateActions.setTitle(title)
    );
    this.socket?.on(ApiServerEvents.USER_JOINED, (user) =>
      this.gameStateActions.addUser(user)
    );
    this.socket?.on(ApiServerEvents.USER_DISCONNECTED, (userId) =>
      this.gameStateActions.deleteUser(userId)
    );
    this.socket?.on(ApiServerEvents.MESSAGE_POSTED, (message) =>
      this.gameStateActions.addMessage(message)
    );
    this.socket?.on(ApiServerEvents.ISSUE_ADDED, (issue) =>
      this.gameStateActions.addIssue(issue)
    );
    this.socket?.on(ApiServerEvents.ISSUE_DELETED, (issueId) =>
      this.gameStateActions.deleteIssue(issueId)
    );
    this.socket?.on(ApiServerEvents.ISSUE_EDITED, (issue) =>
      this.gameStateActions.modifyIssue(issue)
    );
    this.socket?.on(ApiServerEvents.GAME_STARTED, (settings) =>
      this.gameStateActions.startGame(settings)
    );
    this.socket?.on(ApiServerEvents.GAME_ENDED, (results) =>
      this.gameStateActions.endGame(results)
    );
    this.socket?.on(ApiServerEvents.ROUND_STARTED, (issueId) =>
      this.gameStateActions.startRound(issueId)
    );
    this.socket?.on(ApiServerEvents.ROUND_ENDED, (issueScore) =>
      this.gameStateActions.endRound(issueScore)
    );
    this.socket?.on(ApiServerEvents.SCORE_ADDED, (userId) =>
      this.gameStateActions.progressRound(userId)
    );
  }

  private setUserListeners() {
    this.socket?.on(ApiServerEvents.KICK_VOTE_STARTED, (kickVoteInit) =>
      this.gameStateActions.startKickVote(kickVoteInit)
    );
    this.socket?.on(ApiServerEvents.USER_KICK_RESULT, (kickResult) =>
      this.gameStateActions.endKick(kickResult)
    );
    this.socket?.on(ApiServerEvents.KICKED, (message) =>
      this.gameStateActions.setKicked(message)
    );
  }

  private setDealerListeners() {
    this.socket?.on(ApiServerEvents.ALLOW_USER_JOIN, (userToJoin, callback) =>
      this.gameStateActions.setAllowUserToJoin(userToJoin, callback)
    );
  }

  @action public async createGame(dealerToJoin: DealerToJoin) {
    this.beforeAsync();
    this.socket = await connect();
    const response = await emitWithPayloadAndCallback(
      ApiClientEvents.CREATE_GAME,
      dealerToJoin,
      this.socket!
    );
    this.afterAsync(response);
    if (isOk(response)) {
      this.gameStateActions.initDealer(response.data!, this.socket.id);
      this.setListeners();
      this.setDealerListeners();
    } else {
      this.socket.disconnect();
    }
  }

  @action public cancelGame() {
    this.socket?.emit(ApiClientEvents.CANCEL_GAME);
  }

  @action public disconnect() {
    this.socket?.disconnect();
    this.gameStateActions.reset();
  }

  @action public async changeGameTitle(title: string) {
    this.beforeAsync();
    const response = await emitWithPayloadAndCallback(
      ApiClientEvents.CHANGE_GAME_TITLE,
      title,
      this.socket!
    );
    this.afterAsync(response);
  }

  @action public async joinGame(gameId: string) {
    this.beforeAsync();
    this.socket = await connect();
    const response = await emitWithPayloadAndCallback(
      ApiClientEvents.JOIN_GAME,
      gameId,
      this.socket!
    );
    this.afterAsync(response);
    isOk(response)
      ? this.gameStateActions.setId(response.data!)
      : this.socket.disconnect();
  }

  @action public async login(userToJoin: UserToJoin) {
    if (!this.socket?.connected) {
      throw new Error('Before login - join the game!');
    }
    this.beforeAsync();
    const response = await emitWithPayloadAndCallback(
      ApiClientEvents.ADD_USER,
      userToJoin,
      this.socket!
    );
    this.afterAsync(response);
    if (isOk(response)) {
      this.gameStateActions.initUser(response.data!, this.socket.id);
      this.setListeners();
      this.setUserListeners();
    }
  }

  @action public async postMessage(message: string) {
    this.beforeAsync();
    const response = await emitWithPayloadAndCallback(
      ApiClientEvents.POST_MESSAGE,
      message,
      this.socket!
    );
    this.afterAsync(response);
  }

  @action public async kick(userId: string) {
    this.beforeAsync();
    const response = await emitWithPayloadAndCallback(
      ApiClientEvents.KICK_USER,
      userId,
      this.socket!
    );
    this.afterAsync(response);
  }

  @action public async kickVote(vote: boolean) {
    this.beforeAsync();
    const response = await emitWithPayloadAndCallback(
      ApiClientEvents.VOTE_TO_KICK_USER,
      vote,
      this.socket!
    );
    this.afterAsync(response);
  }

  @action public async addIssue(issueBase: IssueBase) {
    this.beforeAsync();
    const response = await emitWithPayloadAndCallback(
      ApiClientEvents.ADD_ISSUE,
      issueBase,
      this.socket!
    );
    this.afterAsync(response);
  }

  @action public async deleteIssue(issueId: string) {
    this.beforeAsync();
    const response = await emitWithPayloadAndCallback(
      ApiClientEvents.DELETE_ISSUE,
      issueId,
      this.socket!
    );
    this.afterAsync(response);
  }

  @action public async editIssue(issue: Issue) {
    this.beforeAsync();
    const response = await emitWithPayloadAndCallback(
      ApiClientEvents.EDIT_ISSUE,
      issue,
      this.socket!
    );
    this.afterAsync(response);
  }

  @action public async startGame(gameSettings: GameSettings) {
    this.beforeAsync();
    const response = await emitWithPayloadAndCallback(
      ApiClientEvents.START_GAME,
      gameSettings,
      this.socket!
    );
    this.afterAsync(response);
  }

  @action public async endGame() {
    this.beforeAsync();
    const response = await emitWithCallback(
      ApiClientEvents.END_GAME,
      this.socket!
    );
    this.afterAsync(response);
  }

  @action public async startRound(issueId: string) {
    this.beforeAsync();
    const response = await emitWithPayloadAndCallback(
      ApiClientEvents.START_ROUND,
      issueId,
      this.socket!
    );
    this.afterAsync(response);
  }

  @action public async endRound() {
    this.beforeAsync();
    const response = await emitWithCallback(
      ApiClientEvents.END_ROUND,
      this.socket!
    );
    this.afterAsync(response);
  }

  @action public async addScore(score: CardScore) {
    this.beforeAsync();
    const response = await emitWithPayloadAndCallback(
      ApiClientEvents.ADD_SCORE,
      score,
      this.socket!
    );
    this.afterAsync(response);
  }
}
