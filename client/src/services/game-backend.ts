import { GameStateActions } from '@client/services/game-state';
import { PointingPokerClientSocket } from 'types/client-socket';
import { DealerToJoin, UserToJoin } from '@shared/api-types/user';
import { ApiClientEvents } from '@shared/api-types/api-events';
import { action, observable } from 'mobx';
import { AckResponse, isFail, isOk } from '@shared/api-types/api-events-maps';
import { connect, emitWithPayloadAndCallback } from '@client/utils/socket.io';

const ADDRESS = `http://localhost`;
const PORT = 42424;

interface GameBackendState {
  isLoading: boolean;
  isFail: boolean;
  failMessage: string;
}

export class GameBackend {
  private socket?: PointingPokerClientSocket;

  @observable public state: GameBackendState = {
    isLoading: false,
    isFail: false,
    failMessage: '',
  };

  constructor(private gameStateActions: GameStateActions) {}

  @action private setLoaded() {
    this.state.isLoading = false;
  }

  @action private setLoading() {
    this.state.isLoading = true;
  }

  @action private resetFail() {
    this.state.isFail = false;
    this.state.failMessage = '';
  }

  @action private setFail(message: string) {
    this.state.isFail = true;
    this.state.failMessage = message;
  }

  @action private beforeAsync() {
    this.setLoading();
    this.resetFail();
  }

  @action private afterAsync<T>(response: AckResponse<T>) {
    this.setLoaded();
    if (isFail(response)) {
      this.setFail(response.failMessage!);
    }
  }

  @action public async createGame(dealerToJoin: DealerToJoin) {
    this.beforeAsync();
    this.socket = await connect(ADDRESS, PORT);
    const response = await emitWithPayloadAndCallback(
      ApiClientEvents.CREATE_GAME,
      dealerToJoin,
      this.socket!
    );
    this.afterAsync(response);
    isOk(response) && this.gameStateActions.initDealer(response.data!);
  }

  @action public async joinGame(gameId: string) {
    this.beforeAsync();
    this.socket = await connect(ADDRESS, PORT);
    const response = await emitWithPayloadAndCallback(
      ApiClientEvents.JOIN_GAME,
      gameId,
      this.socket!
    );
    this.afterAsync(response);
    isOk(response) && this.gameStateActions.setId(response.data!);
  }

  @action public async login(userToJoin: UserToJoin) {
    this.beforeAsync();
    const response = await emitWithPayloadAndCallback(
      ApiClientEvents.ADD_USER,
      userToJoin,
      this.socket!
    );
    this.afterAsync(response);
    isOk(response) && this.gameStateActions.initUser(response.data!);
  }
}
