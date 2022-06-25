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


const popupEdit = document.querySelector ('.popup_type_edit-profile');
const popupForm = document.querySelector('.popup__form');
const popup = document.querySelector('.popup');

function openPopup (popup) {
  popup.classList.add('popup_opened');  
}

function closePopup () {
  popup.classList.remove('popup_opened');
}

const editButton = document.querySelector('.profile__button-edit');
const closeButton = document.querySelector('.popup__button-close');

let nameInput = popupForm.querySelector('.popup__input-text_type_name');
let jobInput = popupForm.querySelector('.popup__input-text_type_job');
let nameProfile = document.querySelector('.profile__heading');
let jobProfile = document.querySelector('.profile__subheading'); 

function autofillEditForm () {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

function openEditForm () {
  openPopup(popupEdit);
  autofillEditForm();
}

editButton.addEventListener('click', openEditForm);

popupForm.addEventListener('submit', submitHandler);

function submitHandler (event) {
  event.preventDefault();  
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup();  
} 

closeButton.addEventListener('click', closePopup);

const popupAdd = document.querySelector('.popup_type_add-button');
const addButton = document.querySelector('.profile__button-add');

addButton.addEventListener('click', openPopup(popupAdd));











