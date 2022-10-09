export default class Card {
  constructor({ data, idOfUser, templateSelector, handleCardClick, handleTrashBtn, handleLikeBtn }) {
    this._templateSelector = templateSelector;
    this._image = data.link;
    this._title = data.name;
    this._cardId = data._id;   
    this._owner = data.owner._id;
    this._likes = data.likes;    
    this._userId = idOfUser;   
    this._handleCardClick = handleCardClick;
    this._handleTrashBtn = handleTrashBtn;
    this._handleLikeBtn = handleLikeBtn;    
  }


  isOwner() {
    if (this._owner === this._userId) {
      return true;
    } else {
      return false;
    }
    }


  isLiked() {
    return this._likes.map(a => a._id).includes(this._userId);
  }
    
    
  countLikes(likes) {   
    this._likes = likes;
    this._counter.textContent = this._likes.length;      
  }


  toggleLike() {
      if (this.isLiked()) {
        this._likeButton.classList.add('element__button-like_active');       
      } else { this._likeButton.classList.remove('element__button-like_active')
    }      
    }


  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }


  _setEventListeners() {
    this._trashButton = this._element.querySelector('.element__button-trash');
    this._likeButton = this._element.querySelector('.element__button-like');
    this._imageCard = this._element.querySelector('.element__image');
    
    if (this.isOwner()) {
      this._trashButton.addEventListener('click', () => {
        
        this._handleTrashBtn(this._cardId, this._element);                
      });
    } else {
      this._trashButton.classList.add('element__button-trash_hidden');
    }   

    this._likeButton.addEventListener('click', () => {
      this._handleLikeBtn(this._cardId);      
    });

    this._imageCard.addEventListener('click', () => {
      this._handleCardClick({
        title: this._title,
        link: this._image
      });
    });  
  }

  
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._counter = this._element.querySelector('.element__counter');     

    this._imageCard.src = this._image;
    this._imageCard.alt = this._title;
    this._element.querySelector('.element__title').textContent = this._title;
 
    this._counter.textContent = this._likes.length;
    this.toggleLike();
 
    return this._element;    
  }
}

