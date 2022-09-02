import './index.css'
import Section from '../scripts/components/Section.js';
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import {
  initialCards,
  settings,
  cardsContainer,
  addButton,
  editButton,
  nameInput,
  jobInput
} from '../scripts/utils/constants.js'


//валидация полей
const cardValidator = new FormValidator(settings, '.popup__form_card');
const userValidator = new FormValidator(settings, '.popup__form_user');


function createCard({ name, link }) {
  const newCard = new Card({
    data: { name, link },
    templateSelector: '.card-template',
    handleCardClick: (data) => {
      newImagePopup.open(data)
    }
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
  }
});


const newUserPopup = new PopupWithForm({
  selectorPopup: '.popup_type_edit-profile',
  handleFormSubmit: (data) => {
    newUserInfo.setUserInfo(data);
  }
});


const newUserInfo = new UserInfo({
  selectorName: '.profile__heading',
  selectorJob: '.profile__subheading'
});


cardList.renderItems();

cardValidator.enableValidation();
userValidator.enableValidation();

newImagePopup.setEventListeners();
newCardPopup.setEventListeners();
newUserPopup.setEventListeners();

editButton.addEventListener('click', () => {
  const userData = newUserInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.job;

  cardValidator.disableButton();

  newUserPopup.open();
});


addButton.addEventListener('click', () => {
  cardValidator.disableButton();

  newCardPopup.open();
});

