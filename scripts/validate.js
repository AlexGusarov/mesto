


//показать ошибку
const showInputError = (formElem, inputElem, errorMessage) => {
  const errorElem = formElem.querySelector(`#${inputElem.id}-error`);
  
  inputElem.classList.add('popup__input-text_invalid');
  errorElem.textContent = errorMessage;
  errorElem.classList.add('popup__input-error_active');
}


//спрятать ошибку
const hideInputError = (formElem, inputElem) => {
  const errorElem = formElem.querySelector(`#${inputElem.id}-error`);

  inputElem.classList.remove('popup__input-text_invalid');
  errorElem.classList.remove('popup__input-error_active');
  errorElem.textContent = '';
}


//проверить валидность одного инпута и показать ошибку
const validateInput = (formElem, inputElem)=> {
  if (!inputElem.validity.valid) {
    showInputError(formElem, inputElem, inputElem.validationMessage);
  } else {
    hideInputError(formElem, inputElem);
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
const toggleButtonSubmit = (inputs, buttonElem) => {
  if (hasInvalidInput(inputs)) {
    buttonElem.setAttribute('disabled', 'disabled');
    buttonElem.classList.add('button_inactive');
  } else {
    buttonElem.removeAttribute('disabled', 'disabled');
    buttonElem.classList.remove('button_inactive');
  }
};


//добавить обработчиков всей форме
const setHandlers = (formElem) => {
  const inputList = Array.from(formElem.querySelectorAll('.popup__input-text'));
  const submitButton = formElem.querySelector('.popup__submit');
  
  toggleButtonSubmit(inputList, submitButton);

  inputList.forEach((el) => {
    el.addEventListener('input', () =>{
      validateInput(formElem, el);
      toggleButtonSubmit(inputList, submitButton);
    });
  });
};


//включить валидацию - добавить обработчиков всем формам
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));

  formList.forEach((el) => {
    el.addEventListener('submit', (evt) => {
      evt.preventDefault;
    });

    setHandlers(el);
  });
};


enableValidation();

