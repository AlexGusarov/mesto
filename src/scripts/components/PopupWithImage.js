import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._imageElement = document.querySelector('.popup__image');
    this._titleElement = document.querySelector('.popup__title-image');
  }

  open({ title, link }) {
    this._imageElement.setAttribute('src', link);
    this._imageElement.setAttribute('alt', title);
    this._titleElement.textContent = title;

    super.open();
  }
}