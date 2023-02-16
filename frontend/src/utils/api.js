import { serverUrl } from './utils';


class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  //метод получения ответа от сервера
  _getServerResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Не удалось получить ответ от сервера. Ошибка ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers
    })
      .then(this._getServerResponse);
  }

  setUserInfo(item) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: item.name,
        about: item.about
      })
    })
      .then(this._getServerResponse);
  }

  getCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers
    })
      .then(this._getServerResponse);
  }

  addCard(newCard) {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: newCard.name,
        link: newCard.link
      })
    })
      .then(this._getServerResponse);
  }

  deleteCard(id) {
    return fetch(`${this.baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this.headers
    })
      .then(this._getServerResponse);
  }

  like(id) {
    return fetch(`${this.baseUrl}/cards/likes/${id}`, {
      method: 'PUT',
      headers: this.headers
    })
      .then(this._getServerResponse);
  }

  dislike(id) {
    return fetch(`${this.baseUrl}/cards/likes/${id}`, {
      method: 'DELETE',
      headers: this.headers
    })
      .then(this._getServerResponse);
  }

  changeLikeCardStatus(isLiked, id) {
    if(isLiked) {
      return this.dislike(id);
    } else {
      return this.like(id);
    }
  }

  setAvatar(data) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        avatar: data.avatar,
      })
    })
      .then(this._getServerResponse);
  }
}

const api = new Api({
  baseUrl: serverUrl,
  headers: {
    authorization: `Bearer ${localStorage.getItem('jwt')}`,
    'Content-Type': 'application/json',
    'Cache-Control': 'max-age=0, no-cache, no-store, must-revalidate'
  }
});

export default api;