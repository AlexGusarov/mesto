//показать ошибку
function showInputError(formElem, inputElem, errorMessage, settings) {
  const errorElem = formElem.querySelector(`#${inputElem.id}-error`);

  inputElem.classList.add(settings.inputErrorClass);
  errorElem.textContent = errorMessage;
  errorElem.classList.add(settings.errorClass);
}


//спрятать ошибку
function hideInputError(formElem, inputElem, settings) {
  const errorElem = formElem.querySelector(`#${inputElem.id}-error`);

  inputElem.classList.remove(settings.inputErrorClass);
  errorElem.classList.remove(settings.errorClass);
  errorElem.textContent = '';
}


//проверить валидность одного инпута и показать ошибку
const validateInput = (formElem, inputElem, settings)=> {
  if (!inputElem.validity.valid) {
    showInputError(formElem, inputElem, inputElem.validationMessage, settings);
  } else {
    hideInputError(formElem, inputElem, settings);
  }
};


//проверить валидность всех инпутов в форме
//если хоть один невалиден, вернет true
const hasInvalidInput = (inputs) => {
  return inputs.some((el) => {
    return !el.validity.valid;
  })
};


//переключить кнопку отправки формы
function toggleButtonSubmit(inputs, buttonElem, settings) {
  if (hasInvalidInput(inputs)) {
    buttonElem.setAttribute('disabled', 'disabled');
    buttonElem.classList.add(settings.inactiveButtonClass);
  } else {
    buttonElem.removeAttribute('disabled', 'disabled');
    buttonElem.classList.remove(settings.inactiveButtonClass);
  }
}


//добавить обработчиков всей форме
function setHandlers(formElem, settings) {
  const inputList = Array.from(formElem.querySelectorAll(settings.inputSelector));
  const submitButton = formElem.querySelector(settings.submitButtonSelector);

  toggleButtonSubmit(inputList, submitButton, settings);

  inputList.forEach((el) => {
    el.addEventListener('input', () => {
      validateInput(formElem, el, settings);
      toggleButtonSubmit(inputList, submitButton, settings);
    });
  });
}


//включить валидацию - добавить обработчиков всем формам
function enableValidation(settings) {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));

  formList.forEach((el) => {
    el.addEventListener('submit', (evt) => {
      evt.preventDefault;
    });

    setHandlers(el, settings);
  });
}


enableValidation ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input-text',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'button_inactive',
  inputErrorClass: 'popup__input-text_invalid',
  errorClass: 'popup__input-error_active',
}); 

