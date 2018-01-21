import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerproject-38fce.firebaseio.com/'
});

export default instance;