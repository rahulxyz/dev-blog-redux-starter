import axios from 'axios';
import {onPost} from 'service/network';

const endpoints={
    register: '/users/register',
    login: '/users/login'
}

const getApp = ()=>{
     return axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.data)
}

const register = (body)=>{
    return onPost(endpoints.register, body, undefined, false);
}

const login = (body)=>{
    return onPost(endpoints.login, body, undefined, false);
}

const operations = {
    getApp,
    register,
    login
}

export default operations;