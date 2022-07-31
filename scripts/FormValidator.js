export default class FormValidator {
  constructor (settings, formElement) {
    this._formSelector = settings.formSelector,
    this._inputSelector = settings.inputSelector,
    this._submitButtonSelector = settings.submitButtonSelector,
    this._inactiveButtonClass = settings.inactiveButtonClass,
    this._inputErrorClass = settings.inputErrorClass,
    this._errorClass = settings.errorClass,
    this._formElement = document.querySelector(formElement),
    this._button = this._formElement.querySelector(settings.submitButtonSelector)
  }  
  

_showInputError (formElem, inputElem, errorMessage) {
  const errorElem = formElem.querySelector(`#${inputElem.id}-error`);

  inputElem.classList.add(this._inputErrorClass);
  errorElem.textContent = errorMessage;
  errorElem.classList.add(this._errorClass);
}


_hideInputError (formElem, inputElem) {
  const errorElem = formElem.querySelector(`#${inputElem.id}-error`);

  inputElem.classList.remove(this._inputErrorClass);
  errorElem.classList.remove(this._errorClass);
  errorElem.textContent = '';
}


_validateInput (formElem, inputElem) {
  if (!inputElem.validity.valid) {
    this._showInputError(formElem, inputElem, inputElem.validationMessage);
  } else {
    this._hideInputError(formElem, inputElem);
  }
};


_hasInvalidInput (inputs) {
  return inputs.some((el) => {
    return !el.validity.valid;
  })
};


disableButton () {
  this._button.setAttribute('disabled', 'disabled');
  this._button.classList.add(this._inactiveButtonClass);
}

_toggleButtonSubmit(inputs, buttonElem) {
  if (this._hasInvalidInput(inputs)) {
    this.disableButton ();
  } else {
    buttonElem.removeAttribute('disabled', 'disabled');
    buttonElem.classList.remove(this._inactiveButtonClass);
  }
}


_setHandlers(formElem) {
  const inputList = Array.from(formElem.querySelectorAll(this._inputSelector));
  const submitButton = formElem.querySelector(this._submitButtonSelector);

  this._toggleButtonSubmit(inputList, submitButton);

  inputList.forEach((el) => {
    el.addEventListener('input', () => {
      this._validateInput(formElem, el);
      this._toggleButtonSubmit(inputList, submitButton);
    });
  });
}


enableValidation() {
  const formList = Array.from(document.querySelectorAll(this._formSelector));
  
  formList.forEach((el) => {
    el.addEventListener('submit', (evt) => {
        evt.preventDefault;
      });
  
      this._setHandlers(el);
    });
  }

}



