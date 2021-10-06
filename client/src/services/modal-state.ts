import { action, computed, makeAutoObservable, observable } from 'mobx';
import { Issue } from '@shared/api-types/issue';
import {
  ChatMessage,
  ChatMessagesList,
  KickVoteInit,
} from '@shared/api-types/chat';
import { AllowUserToJoin } from '@client/services/game-state';
import { CardScore } from '@shared/api-types/game-card-settings';
import { getLast } from '@shared/utils/array';

export interface ChatMessageFE extends ChatMessage {
  system?: boolean;
}

export class ModalState {
  @observable public systemMessage?: null | string = null;
  @observable public messages: ChatMessageFE[] = [];
  @observable public lastChatMessage?: null | ChatMessageFE = null;
  @observable public chatIsOpen: boolean = false;
  @observable public chatOldMessages: number = 0;
  @observable public createIssue: boolean = false;
  @observable public editIssue?: null | Issue = null;
  @observable public deleteIssue?: null | Issue = null;
  @observable public selectIssue?: string;
  @observable public kickUser?: null | string = null;
  @observable public kickVote?: null | KickVoteInit = null;
  @observable public allowUserToJoin?: null | AllowUserToJoin = null;
  @observable public customizeCards: boolean = false;
  @observable public issuesVisible: boolean = false;
  @observable public activeScore?: CardScore;
  @observable public usersCompact: boolean = false;
  @observable public cardsCompact: boolean = false;
  @observable public notificationPermission: NotificationPermission = 'default';

  constructor() {
    makeAutoObservable(this);
  }

  @computed public get isNotificationRequested(): boolean {
    return this.notificationPermission !== 'default';
  }

  @computed public get isNotificationAllowed(): boolean {
    return this.notificationPermission === 'granted';
  }

  @action public setNotificationPermission(permission: NotificationPermission) {
    this.notificationPermission = permission;
  }

  @computed public get isSystemMessageActive(): boolean {
    return Boolean(this.systemMessage);
  }

  @action public initSystemMessage(message?: string) {
    this.systemMessage = message;
  }

  @action public resetSystemMessage() {
    this.systemMessage = null;
  }

  @computed public get messagesCount(): number {
    return this.messages.length;
  }

  @computed public get newMessagesCount(): number {
    if (this.chatIsOpen) return 0;
    return this.messages.length - this.chatOldMessages;
  }

  @action public initMessages(messages: ChatMessagesList) {
    this.lastChatMessage = getLast(messages);
    this.messages = messages;
  }

  @action public addMessage(message: ChatMessageFE) {
    this.lastChatMessage = message;
    this.messages.push(message);
  }

  @action public addChatSystemMessage(userId: string, message: string) {
    this.lastChatMessage = {
      system: true,
      userId,
      message,
      date: new Date().toISOString(),
    };
    this.messages.push(this.lastChatMessage);
  }

  @action public openChat() {
    this.chatIsOpen = true;
  }

  @action public closeChat() {
    this.chatIsOpen = false;
    this.chatOldMessages = this.messages.length;
  }

  @action public initCreateIssue() {
    this.createIssue = true;
  }

  @action public resetCreateIssue() {
    this.createIssue = false;
  }

  @computed public get isEditIssueActive(): boolean {
    return Boolean(this.editIssue);
  }

  @action public initEditIssue(issue: Issue) {
    this.editIssue = issue;
  }

  @action public resetEditIssue() {
    this.editIssue = null;
  }

  @computed public get isDeleteIssueActive(): boolean {
    return Boolean(this.deleteIssue);
  }

  @action public initDeleteIssue(issue: Issue) {
    this.deleteIssue = issue;
  }

  @action public resetDeleteIssue() {
    this.deleteIssue = null;
  }

  @computed public get isSelectIssueActive(): boolean {
    return Boolean(this.selectIssue);
  }

  @action public initSelectIssue(issueId: string) {
    this.selectIssue = issueId;
  }

  @action public resetSelectIssue() {
    this.selectIssue = undefined;
  }

  @computed public get isKickUserActive(): boolean {
    return Boolean(this.kickUser);
  }

  @action public initKickUser(userId: string) {
    this.kickUser = userId;
  }

  @action public resetKickUser() {
    this.kickUser = null;
  }

  @computed public get isKickVoteActive(): boolean {
    return Boolean(this.kickVote);
  }

  @action public initKickVote(init: KickVoteInit) {
    this.kickVote = init;
  }

  @action public resetKickVote() {
    this.kickVote = null;
  }

  @computed public get isAllowUserToJoin(): boolean {
    return Boolean(this.allowUserToJoin);
  }

  @action public initAllowUserToJoin(init: AllowUserToJoin) {
    this.allowUserToJoin = init;
  }

  @action public resetAllowUserToJoin() {
    this.allowUserToJoin = null;
  }

  @action public openCardsCustomize() {
    this.customizeCards = true;
  }

  @action public closeCardsCustomize() {
    this.customizeCards = false;
  }

  @action public showIssues() {
    this.issuesVisible = true;
  }

  @action public hideIssues() {
    this.issuesVisible = false;
  }

  @action public setActiveScore(score: CardScore) {
    this.activeScore = score;
  }

  @action public resetActiveScore() {
    this.activeScore = undefined;
  }

  @action public setUsersCompact(compact: boolean) {
    this.usersCompact = compact;
  }

  @action public setCardsCompact(compact: boolean) {
    this.cardsCompact = compact;
  }
}
