const editButton = document.querySelector('.button_action_edit');

const popup = document.querySelector('.popup');

const submitButton = popup.querySelector('.popup__submit');

const closeButton = document.querySelector('.popup__button-close');

const popupForm = document.querySelector('.popup__form');

popupForm.addEventListener('submit', submitHandler);

function closePopup () {
  popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup);

function openPopup () {
  popup.classList.add('popup_opened');
}

closeButton.addEventListener('click', closePopup);

function submitHandler (event) {
  event.preventDefault();
  let nameInput = popupForm.querySelector('.popup__name');
  let jobInput = popupForm.querySelector('.popup__job');
  let nameProfile = document.querySelector('.profile__heading');
  let jobProfile = document.querySelector('.profile__subheading'); 
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup();  
} 

