export default class Popup {
  constructor(selectorPopup) {
    this._selectorPopup = document.querySelector(selectorPopup);
  }

  _handleEscClose() { }

  setEventListeners() { }

  open() {
    this._selectorPopup.classList.add('popup_opened');

    // cardValidator.disableButton();

    // document.addEventListener('keydown', closeByEsc);
  }

  close() {
    this._selectorPopup.classList.remove('popup_opened');

    // document.removeEventListener('keydown', closeByEsc);
  }
}