export const initialCards = [
  {
    name: 'Куршская коса',
    link: 'https://images.unsplash.com/photo-1552603977-d552dc4022d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80'
  },
  {
    name: 'Валдай',
    link: 'https://images.unsplash.com/photo-1617259664773-dc3a1721cebd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmFsZGF5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Карелия',
    link: 'https://images.unsplash.com/photo-1573156667788-3b0a869a97b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGthcmVsaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Урал',
    link: 'https://images.unsplash.com/photo-1542091607-0545b109d5e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80'
  },
  {
    name: 'Байкал',
    link: 'https://images.unsplash.com/photo-1548146077-23ad537c6ef9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
  },
  {
    name: 'Чебоксары',
    link: 'https://images.unsplash.com/photo-1554319554-bb07f7394b97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80'
  }
];


//объект настроек валидации
export const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input-text',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'button_inactive',
  inputErrorClass: 'popup__input-text_invalid',
  errorClass: 'popup__input-error_active',
}

export const cardsContainer = document.querySelector('.elements__list');
export const addButton = document.querySelector('.profile__button-add');
export const editButton = document.querySelector('.profile__button-edit');
export const nameInput = document.querySelector('.popup__input-text_type_name');
export const jobInput = document.querySelector('.popup__input-text_type_job');
