import { action, makeAutoObservable, observable } from 'mobx';

export class ModalState {
  @observable public createIssue: boolean = false;
  @observable public editIssue: boolean = false;
  @observable public deleteIssue: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  @action public initCreateIssue() {
    this.createIssue = true;
  }

  @action public resetCreateIssue() {
    this.createIssue = false;
  }

  @action public initEditIssue() {
    this.editIssue = true;
  }

  @action public resetEditIssue() {
    this.editIssue = false;
  }

  @action public initDeleteIssue() {
    this.deleteIssue = true;
  }

  @action public resetDeleteIssue() {
    this.deleteIssue = false;
  }
}
