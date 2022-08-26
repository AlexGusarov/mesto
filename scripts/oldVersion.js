
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

editButton.addEventListener('click', handleEditBtn);


function handleEditBtn() {
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


export function closePopup(popup) {
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


function closeByEsc(evt) {
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