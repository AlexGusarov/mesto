import './index.css'
import Section from '../scripts/components/Section.js';
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupConfirm from '../scripts/components/PopupConfirm';
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
const avatarValidator = new FormValidator(settings,'.popup__form_avatar');


function createCard(dataCard) {
  const newCard = new Card({
    data: dataCard,
    idOfUser: newUserInfo.getUserInfo()._id,
    templateSelector: '.card-template',
    handleCardClick: (data) => {
      newImagePopup.open(data)
    },
    handleTrashBtn: (id, card) => {
      popupConfirm.open(id, card);
    },
    handleLikeBtn: (id) => {
      if (!newCard.isLiked()) {
       api.putLike(id)      
       .then((res) => {
        newCard.countLikes(res.likes);
        newCard.toggleLike();        
       })
       .catch((err) => {
        console.log(`Ошибка с отправкой лайка ${err}`)
       })
      } else {
        api.deleteLike(id)
        .then ((res) => {
        newCard.countLikes(res.likes);
        newCard.toggleLike(); 
        })
        .catch((err) => {
          console.log(`Ошибка с удалением лайка ${err}`)
         })        
      }
    }
  });  
  
  return newCard.generateCard();
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-49',
  token: '3ed071d5-3447-4bf6-9405-efffbed59fce'    
}); 


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
  newUserPopup.showSaving();
  api.getNewCard({name, link})  
  .then((res) => {
   return createCard(res);    
  })
  .then((card) => {
    cardList.addItem(card)
  })
  .catch((err) => {
    console.log(`Ошибка с созданием новой карточки ${err}`)
  })
  }
});


const newUserPopup = new PopupWithForm({
  selectorPopup: '.popup_type_edit-profile',
  handleFormSubmit: ({name, about}) => {
    newUserPopup.showSaving(true);  
    api.editProfile({name, about})  
    .then((res) => {
      newUserInfo.setUserInfo(res);
    })
    .then (() => {      
      newUserPopup.close();
    })
    .catch((err) => {
      console.log(`Ошибка с редактированием данных пользователя ${err}`)
    })
    .finally (() => {
      newUserPopup.showSaving(false);
    })      
  }
});


const newUserInfo = new UserInfo({
  selectorName: '.profile__heading',
  selectorJob: '.profile__subheading',
  selectorAvatar: '.profile__avatar'
});


const newAvatar = new PopupWithForm({
  selectorPopup: '.popup_type_avatar',
  handleFormSubmit: ({link}) => {
    newAvatar.showSaving(true);
    api.editAvatar({link})   
    .then((res) => {
      newUserInfo.setUserInfo(res);
    })
    .then(() => {
      newAvatar.close();
    }) 
    .catch((err) => {
      console.log(`Проблемы загрузки аватара ${err}`)
    })
    .finally(() => {
      newAvatar.showSaving(false);
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
    })
    .catch((err) => {
      console.log(`Ошибка с удалением карточки ${err}`)
     })   
  }  
})


cardValidator.enableValidation();
userValidator.enableValidation();
avatarValidator.enableValidation();

newCardPopup.setEventListeners();
newImagePopup.setEventListeners();
newUserPopup.setEventListeners();
popupConfirm.setEventListeners();
newAvatar.setEventListeners();


editButton.addEventListener('click', () => {
  const userData = newUserInfo.getUserInfo();

  nameInput.value = userData.name;
  jobInput.value = userData.about;

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


Promise.all([
  api.getInitialCards(),
  api.getUserInfo()
])
  .then(([startCards, dataUser]) => {
 //установка данных о пользователе
 newUserInfo.setUserInfo(dataUser);
 
//рендер начальных карточек
startCards.reverse();
cardList.renderItems(startCards);
})    
  .catch((err) => {
    console.log(err); 
  });






