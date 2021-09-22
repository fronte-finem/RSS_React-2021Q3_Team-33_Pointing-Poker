export interface SocketState {
  isConnected: boolean;
  isLoading: boolean;
  isFail: boolean;
  failMessage: string;
}

export const getDefaultSocketState = (): SocketState => ({
  isConnected: false,
  isLoading: false,
  isFail: false,
  failMessage: '',
});
