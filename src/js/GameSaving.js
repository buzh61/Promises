export default class GameSaving {
  constructor(saving) {
    this.id = saving.id;
    this.created = saving.created;
    this.userInfo = { ...saving.userInfo };
  }
}
