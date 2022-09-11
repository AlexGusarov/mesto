export default class UserInfo {
  constructor({ selectorName, selectorJob, selectorAvatar }) {
    this._nameElement = document.querySelector(selectorName);
    this._jobElement = document.querySelector(selectorJob);
    this._avatarElement = document.querySelector(selectorAvatar);
  }

  getUserInfo() {
    const dataUser = {
      name: this._nameElement.textContent,
      about: this._jobElement.textContent,
      _id: this._id
    };

    return dataUser;
  }

  setUserInfo(data) {    
    this._nameElement.textContent = data.name;
    this._jobElement.textContent = data.about;
    this._avatarElement.src = data.avatar;
    this._id = data._id;
  }


}