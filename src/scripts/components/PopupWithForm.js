import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({ selectorPopup, handleFormSubmit, disableButton }) {
    super(selectorPopup);
    this._handleFormSubmit = handleFormSubmit;
    this._disableButton = disableButton;
  }

  _getInputValues() {
    this._inputList = this._element.querySelectorAll('.popup__input-text');

    this._formValues = {};

    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  open() {
    this._disableButton();

    super.open();
  }

  setEventListeners() {
    this._element.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this._handleFormSubmit(this._getInputValues());
      this.close();
    });

    super.setEventListeners();
  }

  close() {
    this._element.querySelector('.popup__form').reset();
    super.close();
  }
}
