import axios from 'axios';

const localApi = 'http://localhost:3002';
const androidUrl = "http://192.168.227.239:3002"

const api = axios.create({
    baseURL: androidUrl,
})

export default api;