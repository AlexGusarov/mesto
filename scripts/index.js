const editButton = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__button-close');
const popupForm = document.querySelector('.popup__form');
let nameInput = popupForm.querySelector('.popup__input-text_type_name');
let jobInput = popupForm.querySelector('.popup__input-text_type_job');
let nameProfile = document.querySelector('.profile__heading');
let jobProfile = document.querySelector('.profile__subheading'); 

function openPopup () {
  popup.classList.add('popup_opened');
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

function closePopup () {
  popup.classList.remove('popup_opened');
}

function submitHandler (event) {
  event.preventDefault();  
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup();  
} 

editButton.addEventListener('click', openPopup);

closeButton.addEventListener('click', closePopup);

popupForm.addEventListener('submit', submitHandler);

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const cardsContainer = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#card-template').content;


function createCard (name, link) {

  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

  cardElement.querySelector('.element__title').textContent = name;
  cardElement.querySelector('.element__image').src = link;

  cardsContainer.append(cardElement);
}  

initialCards.forEach(function (item) {
  createCard(item.name, item.link);
});





