export default class UserInfo {
  constructor(selectorName, selectorJob, inputName, inputJob) {
    this._name = document.querySelector(selectorName);
    this._job = document.querySelector(selectorJob);
    this._inputName = document.querySelector(inputName);
    this._inputJob = document.querySelector(inputJob);
  }

  getUserInfo() {
    this._inputName.value = this._name.textContent;
    this._inputJob.value = this._job.textContent;
  }

  setUserInfo() {
    this._name.textContent = this._inputName.value;
    this._job.textContent = this._inputJob.value;
  }
}