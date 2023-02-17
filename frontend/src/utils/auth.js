export const BASE_URL = 'http://api.mesto-api.nomoredomains.work';

const checkResponse = (response) => {
  return response.ok ? response.json() : Promise.reject(new Error(`Ошибка ${response.status}: ${response.statusText}`));
};


const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};


export const register = (data) => {
  return fetch(`${BASE_URL}/signup`, {
    headers,
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then(res => checkResponse(res));
};


export const authorize = (data) => {
  return fetch(`${BASE_URL}/signin`, {
    headers,
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then(res => checkResponse(res));
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      ...headers,
      'Authorization': `Bearer ${token}`,
    },
  })
    .then(res => checkResponse(res));
};