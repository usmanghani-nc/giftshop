import axios from 'axios';

const baseURL = 'http://localhost:8080';
// const baseURL = 'https://api-gifty.herokuapp.com';

const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token');
    if (token) config.headers.authorization = `Bearer ${token}`;

    return config;
  },
  (err) => Promise.reject(err)
);

export default instance;
