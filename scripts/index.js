import Section from './Section.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';
import {
  initialCards,
  settings,
  cardsContainer,
  addButton,
  editButton
} from './constants.js'


//валидация полей
const cardValidator = new FormValidator(settings, '.popup__form_card');
const userValidator = new FormValidator(settings, '.popup__form_user');


function createCard({ name, link }) {
  const newCard = new Card({ name, link }, '.card-template', (evt) => {
    newImagePopup.open(evt);
  });
  return newCard.generateCard();
}

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item);
    cardList.addItem(cardElement);
  }
}, cardsContainer);


const newImagePopup = new PopupWithImage('.popup_type_image');


const newCardPopup = new PopupWithForm({
  selectorPopup: '.popup_type_add-button',
  handleFormSubmit: ({ name, link }) => {
    const CardElement = createCard({ name, link });
    cardList.addItem(CardElement);
  },
  disableButton: () => { cardValidator.disableButton() }
});


const newUserPopup = new PopupWithForm({
  selectorPopup: '.popup_type_edit-profile',
  handleFormSubmit: () => {
    newUserInfo.setUserInfo();
  },
  disableButton: () => { cardValidator.disableButton() }
})


const newUserInfo = new UserInfo(
  '.profile__heading',
  '.profile__subheading',
  '.popup__input-text_type_name',
  '.popup__input-text_type_job');


cardList.renderItems();

cardValidator.enableValidation();
userValidator.enableValidation();

newImagePopup.setEventListeners();
newCardPopup.setEventListeners();
newUserPopup.setEventListeners();

editButton.addEventListener('click', () => {
  newUserPopup.open();
  newUserInfo.getUserInfo();
});

addButton.addEventListener('click', () => {
  newCardPopup.open();
})
