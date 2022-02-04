import axios from 'axios';

const apiUrl = 'http://localhost:3002';

const api = axios.create({
    baseURL: require('../settings.json').databaseUrl || apiUrl,
})

export default api;