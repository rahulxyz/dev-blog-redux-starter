import axios from 'axios';
import {onPost, onGet} from 'service/network';

const endpoints={
    register: '/users/register',
    login: '/users/login',
    newsFeed: "feed/newsFeed",
    articleById: (id)=>`/feed/newsFeed/${id}`,
    addBlog: "feed/createArticle"
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

const getArticleById = (id)=>{
    return onGet(endpoints.articleById(id), undefined, false);
}

export function addBlog(body){
    return onPost(endpoints.addBlog, body, undefined, true);
} 

const operations = {
    getApp,
    register,
    login,
    getBlogList,
    getArticleById,
    addBlog
}

export default operations;