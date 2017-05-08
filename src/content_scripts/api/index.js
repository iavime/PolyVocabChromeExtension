import fetch from 'isomorphic-fetch'

class Api {
  constructor() {
      this.baseUrl = 'https://iavi.me/translate';
  }

  getTranslations({ initial, to }) {
    return fetch(`${this.baseUrl}?word=${initial}&to=${to}`)
      .then(response => response.json())
  }
}

const API = new Api();
export default API;
