import Popup from "./Popup";

export default class PopupConfirm extends Popup {
  constructor ({ selectorPopup, handleSubmit }) {
    super(selectorPopup);
    this._handleSubmit = handleSubmit; 
    this._button = document.querySelector('.popup__submit_type_confirm')  
  }

  open (cardId,cardElement) {
    this._cardId = cardId;
    this._cardElement = cardElement; 

    super.open();
  }

  setEventListeners() {    
    this._button.addEventListener('click', (evt) => {
      evt.preventDefault();

      this._handleSubmit(this._cardId, this._cardElement);
      
      this.close();
    });

    super.setEventListeners();
  }


}