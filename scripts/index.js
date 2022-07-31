// массив начальных карточек
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


//объект настроек валидации
const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input-text',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'button_inactive',
  inputErrorClass: 'popup__input-text_invalid',
  errorClass: 'popup__input-error_active',
}


import Card from './Card.js';
import FormValidator from './FormValidator.js';
const cardsContainer = document.querySelector('.elements__list');
const editPopup = document.querySelector('.popup_type_edit-profile');
const addPopup = document.querySelector('.popup_type_add-button');
const popupForm = document.querySelector('.popup__form');
const nameInput = popupForm.querySelector('.popup__input-text_type_name');
const jobInput = popupForm.querySelector('.popup__input-text_type_job');
const nameProfile = document.querySelector('.profile__heading');
const jobProfile = document.querySelector('.profile__subheading');
const addButton = document.querySelector('.profile__button-add');
const editButton = document.querySelector('.profile__button-edit');
const titleInput = addPopup.querySelector('.popup__input-text_type_title');
const linkInput = addPopup.querySelector('.popup__input-text_type_link');
const popups = document.querySelectorAll('.popup');
const cardValidator = new FormValidator(settings, '.popup__form_card');
const userValidator = new FormValidator(settings, '.popup__form_user');
export const imagePopup = document.querySelector('.popup_type_image');
const imageOfImagePopup = imagePopup.querySelector('.popup__image');
const titleOfImagePopup = imagePopup.querySelector('.popup__title-image');


export function closePopup (popup) {
    popup.classList.remove('popup_opened');

    document.removeEventListener('keydown', closeByEsc); 
  }  


//закрыть окно по крестику или оверлею
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.matches('.popup_opened') || evt.target.matches('.popup__button-close')) {
        closePopup(popup)
    }   
  })
})


function closeByEsc (evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup);
}
}


const openPopup = (typeOfPopup) => {
   typeOfPopup.classList.add('popup_opened');

  //заблокировать кнопку до события input
  cardValidator.disableButton();
   
   document.addEventListener('keydown', closeByEsc);
};


export const openFullImg = (evt) => {
  openPopup(imagePopup);
  
  const element = evt.target.closest('.element');
  const title = element.querySelector('.element__title').textContent;
  const link = evt.target.getAttribute('src');
  
  imageOfImagePopup.setAttribute('src', link);
  imageOfImagePopup.setAttribute('alt', title);
  titleOfImagePopup.textContent = title;  
  };

const renderInitialCards = () => {
  initialCards.forEach((item) => {
    const card = new Card(item, '.card-template');
    const cardElement = card.generateCard();
  
    cardsContainer.append(cardElement);
  }); 
}


function handleEditBtn () {
  openPopup(editPopup);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}


const handleEditSubmit = (event) => {
  event.preventDefault();  
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(event.target.closest('.popup'));
}


const handleAddBtn = () => {
  openPopup(addPopup);
}


const handleAddSubmit = (event) => {
  event.preventDefault();

    const addCardInput = {
      name: titleInput.value,
      link: linkInput.value
    }
    const newCard = new Card(addCardInput, '.card-template');
    const newCardElement = newCard.generateCard();

    cardsContainer.prepend(newCardElement); 
    event.target.reset(); 
    closePopup(event.target.closest('.popup'));  
}


addPopup.querySelector('.popup__form').addEventListener('submit', handleAddSubmit);
editButton.addEventListener('click', handleEditBtn);
editPopup.querySelector('.popup__form').addEventListener('submit', handleEditSubmit);
addButton.addEventListener('click', handleAddBtn);


renderInitialCards();
cardValidator.enableValidation();
userValidator.enableValidation();





