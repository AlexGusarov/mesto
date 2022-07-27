const imagePopup = document.querySelector('.popup_type_image');
const imageOfImagePopup = imagePopup.querySelector('.popup__image');
const titleOfImagePopup = imagePopup.querySelector('.popup__title-image');


class Card {
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


_handleOpenPopup() { 
  imagePopup.classList.add('popup_opened');
   
  document.addEventListener('keydown', (evt) => {
    this._closeByEsc(evt);

  }); 
}


_handleClosePopup() {
  const openedPopup = document.querySelector('.popup_opened');
  if (openedPopup) {
    openedPopup.classList.remove('popup_opened');

    document.removeEventListener('keydown', (evt) => {
      this._closeByEsc(evt);

    }); 
  }
}


_closeByEsc(evt) {
  if (evt.key === 'Escape') {
    this._handleClosePopup();
  }
}


_handleTrashBtn (evt) {
  evt.target.closest('.element').remove();
};


_handleLikeBtn (evt) {
  evt.target.classList.toggle('element__button-like_active');
};


_openFullImg (evt) {
  this._handleOpenPopup();
  
  const element = evt.target.closest('.element');
  const title = element.querySelector('.element__title').textContent;
  const link = evt.target.getAttribute('src');
  
  imageOfImagePopup.setAttribute('src', link);
  imageOfImagePopup.setAttribute('alt', title);
  titleOfImagePopup.textContent = title;  
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
    this._openFullImg(evt);
  });
  
  closeButton.addEventListener('click', () => {
    this._handleClosePopup();
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




//

const initialCards = [
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

const cardsContainer = document.querySelector('.elements__list');

const renderInitialCards = () => {
  initialCards.forEach((item) => {
    const card = new Card(item, '.card-template');
    const cardElement = card.generateCard();
  
    cardsContainer.append(cardElement);
  }); 
}

renderInitialCards();


// const cardsContainer = document.querySelector('.elements__list');
// const cardTemplate = document.querySelector('#card-template').content;
// const imagePopup = document.querySelector('.popup_type_image');
const editPopup = document.querySelector('.popup_type_edit-profile');
// const addPopup = document.querySelector('.popup_type_add-button');
// const popupForm = document.querySelector('.popup__form');
// const nameInput = popupForm.querySelector('.popup__input-text_type_name');
// const jobInput = popupForm.querySelector('.popup__input-text_type_job');
// const nameProfile = document.querySelector('.profile__heading');
// const jobProfile = document.querySelector('.profile__subheading');
// const addButton = document.querySelector('.profile__button-add');
const editButton = document.querySelector('.profile__button-edit');
// const closeButtons = document.querySelectorAll('.popup__button-close');
// const titleInput = addPopup.querySelector('.popup__input-text_type_title');
// const linkInput = addPopup.querySelector('.popup__input-text_type_link');
// const imageOfImagePopup = imagePopup.querySelector('.popup__image');
// const titleOfImagePopup = imagePopup.querySelector('.popup__title-image');
// const popups = document.querySelectorAll('.popup');


// function closePopup () {
//   const openedPopup = document.querySelector('.popup_opened');
//   if (openedPopup) {
//     openedPopup.classList.remove('popup_opened');

//     document.removeEventListener('keydown', closeByEsc); 
//   }  
// };


// //закрыть окно по крестику или оверлею
// popups.forEach((popup) => {
//   popup.addEventListener('mousedown', (evt) => {
//     //защита от двойного клика
//      if(!evt.detail || evt.detail == 1) {
//       if (evt.target.matches('.popup_opened') || evt.target.matches('.popup__button-close')) {
//         closePopup()
//     }
//   }     
//   })
// })


// function closeByEsc (evt) {
//   if (evt.key === 'Escape') {
//     closePopup();
// }
// }


const openPopup = (typeOfPopup) => {
   typeOfPopup.classList.add('popup_opened');
   
   document.addEventListener('keydown', closeByEsc);
};


// const handleTrashBtn = (evt) => {
//   evt.target.closest('.element').remove();
// };


// const handleLikeBtn = (evt) => {
//     evt.target.classList.toggle('element__button-like_active');
// };


// const openFullImg = (evt) => {
//   openPopup(imagePopup);

//   const element = evt.target.closest('.element');
//   const title = element.querySelector('.element__title').textContent;
//   const link = evt.target.getAttribute('src');

//   imageOfImagePopup.setAttribute('src', link);
//   imageOfImagePopup.setAttribute('alt', title);
//   titleOfImagePopup.textContent = title;  
// };


// const createCard = (name, link) => {  
//   const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
//   const imageCard = cardElement.querySelector('.element__image');

//   cardElement.querySelector('.element__title').textContent = name;
//   imageCard.src = link;
//   imageCard.alt = name;

//   imageCard.addEventListener('click', openFullImg);  

//   const trashButton = cardElement.querySelector('.element__button-trash');
//   trashButton.addEventListener('click', handleTrashBtn); 

//   const likeButton = cardElement.querySelector('.element__button-like');  
//   likeButton.addEventListener('click', handleLikeBtn);

//   return cardElement;  
// }  


// const renderInitialCards = () => {
//   initialCards.forEach(function (item) {
//       const card = createCard(item.name, item.link);
//       cardsContainer.append(card);
//     });    
// }


// renderInitialCards ();


function handleEditBtn () {
  openPopup(editPopup);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}


editButton.addEventListener('click', handleEditBtn);


// const handleEditSubmit = (event) => {
//   event.preventDefault();  
//   nameProfile.textContent = nameInput.value;
//   jobProfile.textContent = jobInput.value;
//   closePopup();
// }


// editPopup.querySelector('.popup__form').addEventListener('submit', handleEditSubmit);


// const handleAddBtn = () => {
//   openPopup(addPopup);
// }


// addButton.addEventListener('click', handleAddBtn);


// const handleAddSubmit = (event) => {
//   event.preventDefault();

//   if(titleInput.value !== "" || linkInput.value !== "" ) {
//     const newCard = createCard (titleInput.value, linkInput.value);
//     cardsContainer.prepend(newCard); 
//     event.target.reset(); 
//     closePopup();
//   } else {
//     event.target.querySelector('.popup__submit').classList.add('button_inactive');
//     event.target.querySelector('.popup__submit').setAttribute('disabled', 'disabled');
//   }  
// }


// addPopup.querySelector('.popup__form').addEventListener('submit', handleAddSubmit);







