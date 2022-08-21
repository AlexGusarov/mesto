import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor(selectorPopup, handleFormSubmit) {
    super(selectorPopup);
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    this._inputList = this._element.querySelectorAll('.form__input');

    this._formValues = {};

    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }


  setEventListeners() {
    this._element.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this._handleFormSubmit(this._getInputValues());
    });

    super.setEventListeners();
  }

  close() {
    this._element.reset();
    super.close();
  }
}
