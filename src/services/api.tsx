import axios from 'axios';
const header = {
    'Content-Type': 'application/json',
    'Accept-Language': 'pt-BR',
    'User-Agent': `teste`
    // Authorization: token,
};
const api = axios.create({
  baseURL: 'https://api-dev.clubepromais.com.br/api',
  headers:header
});

export default api;