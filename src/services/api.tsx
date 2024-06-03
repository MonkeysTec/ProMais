import axios from 'axios';
const header = {
    'Content-Type': 'application/json',
    'Accept-Language': 'pt-BR',

    // Authorization: token,
};
const api = axios.create({
  baseURL: 'https://api-dev.clubepromais.com.br/api',
  headers:header
});
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { config, response } = error;
    if (response && response.status === 401) {
      try {
        await api.post('/users/refresh/token/v1');
        return api(config);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
export default api;
