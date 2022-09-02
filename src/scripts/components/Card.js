export default class Card {
  constructor({ data, templateSelector, handleCardClick }) {
    this._templateSelector = templateSelector;
    this._image = data.link;
    this._title = data.name;
    this._handleCardClick = handleCardClick;
  }


  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }


  _handleTrashBtn() {
    this._element.remove();
    this._element = null;
  }

  _handleLikeBtn(evt) {
    evt.target.classList.toggle('element__button-like_active');
  }

  _setEventListeners() {
    const trashButton = this._element.querySelector('.element__button-trash');
    const likeButton = this._element.querySelector('.element__button-like');
    const imageCard = this._element.querySelector('.element__image');

    trashButton.addEventListener('click', () => {
      this._handleTrashBtn();
    });

    likeButton.addEventListener('click', (evt) => {
      this._handleLikeBtn(evt);
    });

    imageCard.addEventListener('click', () => {
      this._handleCardClick({
        title: this._title,
        link: this._image
      });
    });
  }


  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    const elementImage = this._element.querySelector('.element__image');

    elementImage.src = this._image;
    elementImage.alt = this._title;
    this._element.querySelector('.element__title').textContent = this._title;


    return this._element;
  }
}

