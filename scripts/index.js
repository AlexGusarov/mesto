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
  return cardElement;  
}  

function renderInitialCards () {
  initialCards.forEach(function (item) {
      const card = createCard(item.name, item.link);
      cardsContainer.append(card);
    });    
}

renderInitialCards ();

const editPopup = document.querySelector('.popup_type_edit-profile');
const addPopup = document.querySelector('.popup_type_add-button');

function openPopup (typeOfPopup) {
  typeOfPopup.classList.add('popup_opened');
}

function closePopup () {
  const openedPOpup = document.querySelector('.popup_opened').closest('.popup');
  openedPOpup.classList.remove('popup_opened');
}


const popupForm = document.querySelector('.popup__form');
let nameInput = popupForm.querySelector('.popup__input-text_type_name');
let jobInput = popupForm.querySelector('.popup__input-text_type_job');
let nameProfile = document.querySelector('.profile__heading');
let jobProfile = document.querySelector('.profile__subheading'); 

function handleEditBtn () {
  openPopup(editPopup);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

const editButton = document.querySelector('.profile__button-edit');
editButton.addEventListener('click', handleEditBtn);

const closeButton = document.querySelectorAll('.popup__button-close');
closeButton.forEach( function(el) {
  el.addEventListener('click', closePopup)
});


function handleEditSubmit (event) {
  event.preventDefault();  
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup();
}

editPopup.querySelector('.popup__form').addEventListener('submit', handleEditSubmit);


function handleAddBtn () {
  openPopup(addPopup);
}

const addButton = document.querySelector('.profile__button-add');
addButton.addEventListener('click', handleAddBtn);

let titleInput = addPopup.querySelector('.popup__input-text_type_title');
let linkInput = addPopup.querySelector('.popup__input-text_type_link');

function handleAddSubmit (event) {
  event.preventDefault();
  const newCard = createCard (titleInput.value, linkInput.value);
  cardsContainer.prepend(newCard);
  closePopup();
}

addPopup.querySelector('.popup__form').addEventListener('submit', handleAddSubmit);








