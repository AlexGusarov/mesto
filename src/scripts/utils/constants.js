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
export const editAvatar = document.querySelector('.profile__avatar-icon');
export const nameInput = document.querySelector('.popup__input-text_type_name');
export const jobInput = document.querySelector('.popup__input-text_type_job');
