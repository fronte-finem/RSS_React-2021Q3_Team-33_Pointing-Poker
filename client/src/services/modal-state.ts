import { action, computed, makeAutoObservable, observable } from 'mobx';
import { Issue } from '@shared/api-types/issue';
import { KickResult, KickVoteInit } from '@shared/api-types/chat';

export class ModalState {
  @observable public createIssue: boolean = false;
  @observable public editIssue: null | Issue = null;
  @observable public deleteIssue: null | Issue = null;
  @observable public kickUser: null | string = null;
  @observable public kickVote: null | KickVoteInit = null;
  @observable public kickResult: null | KickResult = null;
  @observable public systemMessage: null | string = null;

  constructor() {
    makeAutoObservable(this);
  }

  @computed public get isEditIssueActive(): boolean {
    return Boolean(this.editIssue);
  }

  @computed public get isDeleteIssueActive(): boolean {
    return Boolean(this.deleteIssue);
  }

  @computed public get isKickUserActive(): boolean {
    return Boolean(this.kickUser);
  }

  @computed public get isKickVoteActive(): boolean {
    return Boolean(this.kickVote);
  }

  @computed public get isKickResultActive(): boolean {
    return Boolean(this.kickResult);
  }

  @computed public get isSystemMessageActive(): boolean {
    return Boolean(this.systemMessage);
  }

  @action public initCreateIssue() {
    this.createIssue = true;
  }

  @action public resetCreateIssue() {
    this.createIssue = false;
  }

  @action public initEditIssue(issue: Issue) {
    this.editIssue = issue;
  }

  @action public resetEditIssue() {
    this.editIssue = null;
  }

  @action public initDeleteIssue(issue: Issue) {
    this.deleteIssue = issue;
  }

  @action public resetDeleteIssue() {
    this.deleteIssue = null;
  }

  @action public initKickUser(userId: string) {
    this.kickUser = userId;
  }

  @action public resetKickUser() {
    this.kickUser = null;
  }

  @action public initKickVote(init: KickVoteInit) {
    this.kickVote = init;
  }

  @action public resetKickVote() {
    this.kickVote = null;
  }

  @action public initKickResult(result: KickResult) {
    this.kickResult = result;
  }

  @action public resetKickResult() {
    this.kickResult = null;
  }

  @action public initSystemMessage(message: null | string) {
    this.systemMessage = message;
  }

  @action public resetSystemMessage() {
    this.systemMessage = null;
  }
}
