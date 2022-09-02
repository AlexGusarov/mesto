export default class FormValidator {
  constructor(settings, formElement) {
    this._formSelector = settings.formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._formElement = document.querySelector(formElement);
    this._button = this._formElement.querySelector(settings.submitButtonSelector);
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
  }


  _showInputError(inputElem, errorMessage) {
    const errorElem = this._formElement.querySelector(`#${inputElem.id}-error`);

    inputElem.classList.add(this._inputErrorClass);
    errorElem.textContent = errorMessage;
    errorElem.classList.add(this._errorClass);
  }


  _hideInputError(inputElem) {
    const errorElem = this._formElement.querySelector(`#${inputElem.id}-error`);

    inputElem.classList.remove(this._inputErrorClass);
    errorElem.classList.remove(this._errorClass);
    errorElem.textContent = '';
  }


  _validateInput(inputElem) {
    if (!inputElem.validity.valid) {
      this._showInputError(inputElem, inputElem.validationMessage);
    } else {
      this._hideInputError(inputElem);
    }
  };


  _hasInvalidInput(inputs) {
    return inputs.some((el) => {
      return !el.validity.valid;
    })
  };


  disableButton() {
    this._button.setAttribute('disabled', 'disabled');
    this._button.classList.add(this._inactiveButtonClass);
  }


  _toggleButtonSubmit(inputs, buttonElem) {
    if (this._hasInvalidInput(inputs)) {
      this.disableButton();
    } else {
      buttonElem.removeAttribute('disabled', 'disabled');
      buttonElem.classList.remove(this._inactiveButtonClass);
    }
  }


  _setHandlers() {
    this._toggleButtonSubmit(this._inputList, this._button);

    this._inputList.forEach((el) => {
      el.addEventListener('input', () => {
        this._validateInput(el);
        this._toggleButtonSubmit(this._inputList, this._button);
      });
    });
  }


  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault;
    });

    this._setHandlers();
  }
}



