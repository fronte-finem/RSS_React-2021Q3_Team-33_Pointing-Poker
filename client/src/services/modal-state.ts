import { action, computed, makeAutoObservable, observable } from 'mobx';
import { Issue } from '@shared/api-types/issue';

export class ModalState {
  @observable public createIssue: boolean = false;
  @observable public editIssue: null | Issue = null;
  @observable public deleteIssue: null | Issue = null;

  constructor() {
    makeAutoObservable(this);
  }

  @computed public get isEditIssueActive(): boolean {
    return Boolean(this.editIssue);
  }

  @computed public get isDeleteIssueActive(): boolean {
    return Boolean(this.deleteIssue);
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
}
