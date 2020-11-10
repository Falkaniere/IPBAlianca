import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ipbmorungaba-b3618.firebaseio.com/'
});

export default api;
