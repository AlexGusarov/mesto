import Popup from "./Popup";

export default class PopupAvatar extends Popup{
  constructor ({ selectorPopup, handleSubmit }) {
    super(selectorPopup);
    this._handleSubmit = handleSubmit;    
    this._inputList = this._element.querySelectorAll('.popup__input-text');
    this._form = this._element.querySelector('.popup__form');
    this._button = document.querySelector('.popup__submit_type_avatar')  
  }
  
  _getInputValues() {
    this._formValues = {};

    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
   

    return this._formValues;
  }


  setEventListeners() {    
    this._element.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this._handleSubmit(this._getInputValues());
            
      this.close();
    });

    super.setEventListeners();
  }




}