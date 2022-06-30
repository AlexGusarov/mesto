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
const cardTemplate = document.querySelector('#card-template').content;
const imagePopup = document.querySelector('.popup_type_image');
const editPopup = document.querySelector('.popup_type_edit-profile');
const addPopup = document.querySelector('.popup_type_add-button');
const popupForm = document.querySelector('.popup__form');
let nameInput = popupForm.querySelector('.popup__input-text_type_name');
let jobInput = popupForm.querySelector('.popup__input-text_type_job');
let nameProfile = document.querySelector('.profile__heading');
let jobProfile = document.querySelector('.profile__subheading');

const openPopup = (typeOfPopup) => {
  typeOfPopup.classList.add('popup_opened');
};

const closePopup = () => {
  const openedPopup = document.querySelector('.popup_opened').closest('.popup');
  openedPopup.classList.remove('popup_opened');
};


const handleTrashBtn = (evt) => {
  evt.target.closest('.element').remove();
};

const handleLikeBtn = (evt) => {
    evt.target.classList.toggle('element__button-like_active');
};

const openFullImg = (evt) => {
  openPopup(imagePopup);

  let link = evt.target.getAttribute('src');
  imagePopup.querySelector('.popup__image').setAttribute('src', link);

  let element = evt.target.closest('.element');
  let title = element.querySelector('.element__title').textContent;

  imagePopup.querySelector('.popup__title-image').textContent = title;  
};


const createCard = (name, link) => {  
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const imageCard = cardElement.querySelector('.element__image');

  cardElement.querySelector('.element__title').textContent = name;
  imageCard.src = link;

  imageCard.addEventListener('click', openFullImg);  

  const trashButton = cardElement.querySelector('.element__button-trash');
  trashButton.addEventListener('click', handleTrashBtn); 

  const likeButton = cardElement.querySelector('.element__button-like');  
  likeButton.addEventListener('click', handleLikeBtn);

  return cardElement;  
}  


const renderInitialCards = () => {
  initialCards.forEach(function (item) {
      const card = createCard(item.name, item.link);
      cardsContainer.append(card);
    });    
}

renderInitialCards ();


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


const handleEditSubmit = (event) => {
  event.preventDefault();  
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup();
}

editPopup.querySelector('.popup__form').addEventListener('submit', handleEditSubmit);


const handleAddBtn = () => {
  openPopup(addPopup);
}

const addButton = document.querySelector('.profile__button-add');
addButton.addEventListener('click', handleAddBtn);

let titleInput = addPopup.querySelector('.popup__input-text_type_title');
let linkInput = addPopup.querySelector('.popup__input-text_type_link');

const handleAddSubmit = (event) => {
  event.preventDefault();
  const newCard = createCard (titleInput.value, linkInput.value);
  cardsContainer.prepend(newCard);
  clearAddInputs();
  closePopup();
}

const clearAddInputs = () => {
  titleInput.value = '';
  linkInput.value = '';
}

addPopup.querySelector('.popup__form').addEventListener('submit', handleAddSubmit);







