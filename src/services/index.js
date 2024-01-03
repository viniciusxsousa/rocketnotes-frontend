import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://rocketnotes-9or6.onrender.com'
});