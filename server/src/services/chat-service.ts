import { ChatMessage, ChatMessagesList } from '@shared/api-types/chat';

export class ChatService {
  private _chatMessages: ChatMessagesList = [];

  public addMessage(userId: string, message: string): ChatMessage {
    const chatMessage: ChatMessage = {
      userId,
      message,
      date: new Date().toISOString(),
    };
    this._chatMessages.push(chatMessage);
    return { ...chatMessage };
  }

  public getChatMessages(): ChatMessagesList {
    return this._chatMessages.map((message) => ({ ...message }));
  }

  public destroy(): void {
    this._chatMessages = [];
  }
}
