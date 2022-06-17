const editButton = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');
const submitButton = popup.querySelector('.popup__submit');
const closeButton = document.querySelector('.popup__button-close');
const popupForm = document.querySelector('.popup__form');
let nameInput = popupForm.querySelector('.popup__input-text_name');
let jobInput = popupForm.querySelector('.popup__input-text_job');
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










