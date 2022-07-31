import {imagePopup, closePopup, openFullImg} from './index.js';


export default class Card {
constructor (data, templateSelector) {
  this._templateSelector = templateSelector;
  this._image = data.link;
  this._title = data.name;
}


_getTemplate() {
  const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);

  return cardElement;
}


_handleTrashBtn (evt) {
  evt.target.closest('.element').remove();
};


_handleLikeBtn (evt) {
  evt.target.classList.toggle('element__button-like_active');
};


_setEventListeners() {
  const trashButton = this._element.querySelector('.element__button-trash');
  const likeButton = this._element.querySelector('.element__button-like');
  const imageCard = this._element.querySelector('.element__image');
  const closeButton = imagePopup.querySelector('.popup__button-close');
  
  trashButton.addEventListener('click', (evt) => {
    this._handleTrashBtn(evt);
  });

  likeButton.addEventListener('click', (evt) => {
    this._handleLikeBtn(evt);
  });

  imageCard.addEventListener('click', (evt) => {
    openFullImg(evt);
  });
  
  closeButton.addEventListener('click', (evt) => {
    closePopup(evt.target.closest('.popup'));
  })
}


generateCard() {
  this._element = this._getTemplate();
  this._setEventListeners();

  this._element.querySelector('.element__image').src = this._image;
  this._element.querySelector('.element__image').alt = this._title;
  this._element.querySelector('.element__title').textContent = this._title;

  return this._element;
}
}

