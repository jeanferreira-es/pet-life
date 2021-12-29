import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.46.6:3000'
});

export default api;