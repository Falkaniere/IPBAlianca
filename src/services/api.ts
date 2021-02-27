import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ipbmorungaba.firebaseio.com/'
});

export default api;
