import axios from 'axios';
import {onPost, onGet} from 'service/network';

const endpoints={
    register: '/users/register',
    login: '/users/login',
    newsFeed: "feed/newsFeed",
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

const getBlogList = ()=>{
    return onGet(endpoints.newsFeed, undefined, false);
}


const operations = {
    getApp,
    register,
    login,
    getBlogList
}

export default operations;