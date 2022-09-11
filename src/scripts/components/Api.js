export default class Api {
  constructor ({baseUrl, token}) {
    this._baseUrl = baseUrl;
    this._token = token;
  }


  getInitialCards () {
    return fetch (`${this._baseUrl}/cards`, {
    headers: { 
      authorization: this._token
    }
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      
      return Promise.reject(`Ошибка: ${res.status}`);
    })        
  }


  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
    headers: { 
        authorization: this._token
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }


  editProfile (data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: { 
          authorization: this._token,
          'Content-Type': 'application/json'
        },
      body: JSON.stringify({
          name: data.name,
          about: data.about
        })
      })
    }
  

  getNewCard ({name, link}) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: { 
          authorization: this._token,
          'Content-Type': 'application/json'
        },
      body: JSON.stringify({
          name: name,
          link: link
        })
      })
    }


  deleteCard (cardId){
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: { 
          authorization: this._token            
        }    
      })
    }

    
  putLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: { 
          authorization: this._token            
        }    
      })
    } 


  deleteLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: { 
          authorization: this._token            
        }    
      })
    }

  editAvater ({link}) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: { 
          authorization: this._token,
          'Content-Type': 'application/json'
        },
      body: JSON.stringify({
          avatar: link
        })
      })
    }
  

  }