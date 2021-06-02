import axios from 'axios';

export const key = '49a64081285d42bb8b303b0483f8352f3d56c2a8';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers: {
        'Content-Type': 'application',
        'Authorization': `Bearer ${key}`
    }
})

export default api;