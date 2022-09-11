import './index.css'
import Section from '../scripts/components/Section.js';
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupConfirm from '../scripts/components/PopupConfirm';
import PopupAvatar from '../scripts/components/PopupAvatar';
import UserInfo from '../scripts/components/UserInfo.js';
import Api from '../scripts/components/Api';
import { 
  settings,
  cardsContainer,
  addButton,
  editButton,
  nameInput,
  jobInput,
  editAvatar
} from '../scripts/utils/constants.js'



//валидация полей
const cardValidator = new FormValidator(settings, '.popup__form_card');
const userValidator = new FormValidator(settings, '.popup__form_user');


function createCard(dataCard) {
  const newCard = new Card({
    data: dataCard,
    idOfUser: userId,
    templateSelector: '.card-template',
    handleCardClick: (data) => {
      newImagePopup.open(data)
    },
    handleTrashBtn: (id, card) => {
      deleteItem(id, card);
    },
    handleLikeBtn: (id) => {
      if (!newCard.isLiked()) {
       api.putLike(id)
       .then((res) => {
        return res.json();       
       })
       .then((res) => {
        newCard.countLikes(res.likes);
        newCard.toggleLike();        
       })
      } else {
        api.deleteLike(id)
        .then((res) => {
          return res.json();        
        })
        .then ((res) => {
        newCard.countLikes(res.likes);
        newCard.toggleLike(); 
        })        
      }
    }
  });  
  
  return newCard.generateCard();
}


const cardList = new Section({
  renderer: (item) => {
    const cardElement = createCard(item);
    cardList.addItem(cardElement);
  }
}, cardsContainer);


const newImagePopup = new PopupWithImage('.popup_type_image');


const newCardPopup = new PopupWithForm({
  selectorPopup: '.popup_type_add-button',
  handleFormSubmit: ({name, link}) => {
   postCard({name, link});
  }
});


const newUserPopup = new PopupWithForm({
  selectorPopup: '.popup_type_edit-profile',
  handleFormSubmit: (data) => {
    api.editProfile(data);
  }
});


const newUserInfo = new UserInfo({
  selectorName: '.profile__heading',
  selectorJob: '.profile__subheading',
  selectorAvatar: '.profile__avatar'
});


const newAvatar = new PopupAvatar({
  selectorPopup: '.popup_type_avatar',
  handleSubmit: ({link}) => {
    api.editAvater({link})
    .catch((err) => {
      console.log(`Проблемы загрузки аватара ${err}`)
    })

  }
})







const popupConfirm = new PopupConfirm({
  selectorPopup: '.popup_type_confirm',
  handleSubmit: (cardId, card) => {
    api.deleteCard(cardId, card)
    .then( () => {
      card.remove();
      card = null;
      popupConfirm.close();
    });
    console.log("Нажал на кнопку!)") 
  }  
})

function deleteItem (cardId, card) {
  popupConfirm.open(cardId, card);
}



cardValidator.enableValidation();
userValidator.enableValidation();

newCardPopup.setEventListeners();
newImagePopup.setEventListeners();
newUserPopup.setEventListeners();
popupConfirm.setEventListeners();
newAvatar.setEventListeners();

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

editAvatar.addEventListener('click', () => {
  cardValidator.disableButton();

  newAvatar.open();
})


const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-49',
  token: '3ed071d5-3447-4bf6-9405-efffbed59fce'    
}); 


//переменная для ID юзера - нужна для определения своя-чужая карточка
let userId = null;

Promise.all([
  api.getInitialCards(),
  api.getUserInfo()
])
  .then(([startCards, dataUser]) => {
 //установка данных о пользователе
 newUserInfo.setUserInfo(dataUser);
 userId = dataUser._id;
 

//рендер начальных карточек
startCards.reverse();
cardList.renderItems(startCards);
})    
  .catch((err) => {
    console.log(err); 
  });


// запостить новую карточку
function postCard (cardInfo) {
  api.getNewCard(cardInfo).
  then((res) => {
    return res.json()    
  })
  .then((res) => {
   return createCard(res);    
  })
  .then((card) => {
    cardList.addItem(card)
  })
  .catch((err) => {
    console.log(err)
  })
}





