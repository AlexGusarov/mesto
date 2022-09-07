export default class Popup {
  constructor(selectorPopup) {
    this._element = document.querySelector(selectorPopup);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._element.addEventListener('mousedown', (evt) => {
      if (evt.target.matches('.popup_opened') || evt.target.matches('.popup__button-close')) {
        this.close();
      }
    })
  }

  open() {
    this._element.classList.add('popup_opened');

    // cardValidator.disableButton();

    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._element.classList.remove('popup_opened');

    document.removeEventListener('keydown', this._handleEscClose);
  }
}