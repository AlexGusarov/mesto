import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({ selectorPopup, handleFormSubmit }) {
    super(selectorPopup);
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = this._element.querySelectorAll('.popup__input-text');
    this._form = this._element.querySelector('.popup__form');
    this._button = this._element.querySelector('.popup__submit')
  }

  _getInputValues() {
    this._formValues = {};

    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });s
   

    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();     

      this._handleFormSubmit(this._getInputValues());
    })
  } 

  close() {
    this._form.reset();
    super.close();
  }

  showSaving (isLoading) {
    this._buttonText = this._button.textContent;
    
    if (isLoading) {
      this._button.textContent = 'Сохранение...'
    } else {
      this._button.textContent = this._buttonText
    }    
  }
}
