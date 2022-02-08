import axios from 'axios';

const apiUrl = 'http://localhost:3002';
const lanUrl = 'http://192.168.0.10:3002';

const api = axios.create({
    baseURL: apiUrl,
})

export default api;