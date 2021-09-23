import { action, makeObservable, observable } from 'mobx';
import { ModalState } from '@client/services/modal-state';
import { GameState } from '@client/services/game-state';
import { AckResponse, isOk } from '@shared/api-types/api-events-maps';
import { ApiClientEvents } from '@shared/api-types/api-events';
import { PointingPokerClientSocket } from 'types/client-socket';
import { DealerToJoin, UserToJoin } from '@shared/api-types/user';
import {
  connect,
  emitWithCallback,
  emitWithPayloadAndCallback,
} from '@client/utils/socket.io';
import {
  setDealerListeners,
  setSharedListeners,
  setUserListeners,
  SocketListenerSetterProps,
} from '@client/services/socket-listeners';
import { Issue, IssueBase } from '@shared/api-types/issue';
import { CardScore } from '@shared/api-types/game-settings';

export class SocketState {
  private socket?: PointingPokerClientSocket;

  @observable public isLoading: boolean = false;
  @observable public isFail: boolean = false;
  @observable public failMessage?: string;

  constructor(private modalState: ModalState, private gameState: GameState) {
    makeObservable(this);
  }

  private getSocketListenerSetterProps(): SocketListenerSetterProps {
    return {
      socket: this.socket,
      modalState: this.modalState,
      gameState: this.gameState,
    };
  }

  @action public beforeAsync() {
    this.isLoading = true;
    this.isFail = false;
    this.failMessage = undefined;
  }

  @action public afterAsync<T>(response: AckResponse<T>) {
    this.isLoading = false;
    if (isOk(response)) return;
    this.isFail = true;
    this.failMessage = response.failMessage;
    this.modalState.initSystemMessage(this.failMessage);
  }

  public get isConnected(): boolean {
    return Boolean(this.socket && this.socket.connected);
  }

  @action private isDisconnected(): boolean {
    const isDisconnected = !this.isConnected;
    if (isDisconnected) {
      this.isFail = true;
      this.failMessage = 'No connection';
      this.modalState.initSystemMessage(this.failMessage);
    }
    return isDisconnected;
  }

  @action public async createGame(dealerToJoin: DealerToJoin) {
    this.beforeAsync();
    this.socket = await connect();
    if (this.isDisconnected()) return;
    const response = await emitWithPayloadAndCallback(
      ApiClientEvents.CREATE_GAME,
      dealerToJoin,
      this.socket
    );
    this.afterAsync(response);
    if (isOk(response)) {
      this.gameState.initDealer(response.data!, this.socket.id);
      const props = this.getSocketListenerSetterProps();
      setDealerListeners(props);
      setSharedListeners(props);
    } else {
      this.socket.disconnect();
    }
  }

  @action public async joinGame(gameId: string) {
    this.beforeAsync();
    this.socket = await connect();
    if (this.isDisconnected()) return;
    const response = await emitWithPayloadAndCallback(
      ApiClientEvents.JOIN_GAME,
      gameId,
      this.socket
    );
    this.afterAsync(response);
    if (isOk(response)) {
      this.gameState.setId(response.data!);
    } else {
      this.socket.disconnect();
    }
  }

  @action public async login(userToJoin: UserToJoin) {
    if (this.isDisconnected()) return;
    this.beforeAsync();
    const response = await emitWithPayloadAndCallback(
      ApiClientEvents.ADD_USER,
      userToJoin,
      this.socket
    );
    this.afterAsync(response);
    if (isOk(response)) {
      const props = this.getSocketListenerSetterProps();
      setUserListeners(props);
      setSharedListeners(props);
      if (!response.data || !this.socket) return;
      this.gameState.initUser(response.data, this.socket.id);
      if (!response.data.messages) return;
      this.modalState.initMessages(response.data.messages);
    }
  }

  @action public cancelGame() {
    this.socket?.emit(ApiClientEvents.CANCEL_GAME);
  }

  @action public disconnect() {
    this.socket?.disconnect();
    this.socket = undefined;
    this.gameState.reset();
  }

  @action public async changeGameTitle(title: string) {
    if (this.isDisconnected()) return;
    this.beforeAsync();
    const response = await emitWithPayloadAndCallback(
      ApiClientEvents.CHANGE_GAME_TITLE,
      title,
      this.socket
    );
    this.afterAsync(response);
  }

  @action public async postMessage(message: string) {
    if (this.isDisconnected()) return;
    this.beforeAsync();
    const response = await emitWithPayloadAndCallback(
      ApiClientEvents.POST_MESSAGE,
      message,
      this.socket
    );
    this.afterAsync(response);
  }

  @action public async kick(userId: string) {
    if (this.isDisconnected()) return;
    this.beforeAsync();
    const response = await emitWithPayloadAndCallback(
      ApiClientEvents.KICK_USER,
      userId,
      this.socket
    );
    this.afterAsync(response);
  }

  @action public async kickVote(vote: boolean) {
    if (this.isDisconnected()) return;
    this.beforeAsync();
    const response = await emitWithPayloadAndCallback(
      ApiClientEvents.VOTE_TO_KICK_USER,
      vote,
      this.socket
    );
    this.afterAsync(response);
  }

  @action public async addIssue(issueBase: IssueBase) {
    if (this.isDisconnected()) return;
    this.beforeAsync();
    const response = await emitWithPayloadAndCallback(
      ApiClientEvents.ADD_ISSUE,
      issueBase,
      this.socket
    );
    this.afterAsync(response);
  }

  @action public async deleteIssue(issueId: string) {
    if (this.isDisconnected()) return;
    this.beforeAsync();
    const response = await emitWithPayloadAndCallback(
      ApiClientEvents.DELETE_ISSUE,
      issueId,
      this.socket
    );
    this.afterAsync(response);
  }

  @action public async editIssue(issue: Issue) {
    if (this.isDisconnected()) return;
    this.beforeAsync();
    const response = await emitWithPayloadAndCallback(
      ApiClientEvents.EDIT_ISSUE,
      issue,
      this.socket
    );
    this.afterAsync(response);
  }

  @action public async startGame() {
    if (this.isDisconnected()) return;
    this.beforeAsync();
    const response = await emitWithPayloadAndCallback(
      ApiClientEvents.START_GAME,
      this.gameState.settings,
      this.socket
    );
    this.afterAsync(response);
  }

  @action public async endGame() {
    if (this.isDisconnected()) return;
    this.beforeAsync();
    const response = await emitWithCallback(
      ApiClientEvents.END_GAME,
      this.socket
    );
    this.afterAsync(response);
  }

  @action public async startRound(issueId: string) {
    if (this.isDisconnected()) return;
    this.beforeAsync();
    const response = await emitWithPayloadAndCallback(
      ApiClientEvents.START_ROUND,
      issueId,
      this.socket
    );
    this.afterAsync(response);
  }

  @action public async endRound() {
    if (this.isDisconnected()) return;
    this.beforeAsync();
    const response = await emitWithCallback(
      ApiClientEvents.END_ROUND,
      this.socket
    );
    this.afterAsync(response);
  }

  @action public async addScore(score: CardScore) {
    if (this.isDisconnected()) return;
    this.beforeAsync();
    const response = await emitWithPayloadAndCallback(
      ApiClientEvents.ADD_SCORE,
      score,
      this.socket
    );
    this.afterAsync(response);
  }
}
