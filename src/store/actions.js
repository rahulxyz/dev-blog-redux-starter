import operations from './operations';
import types from './types';

const actions = {
    app,
    register,
    login,
    getBlogList,
    getArticleById
}

function app(){

    return async dispatch =>{
        dispatch(request());
        let payload= await operations.getApp();

        try{
            //throw new Error("Unauth");
            dispatch(success(payload));
        }catch(error){
            dispatch(failure(error));
        }
    }   

    function request() {
        return {type: types.APP_REQUEST};
    }

    function success(payload) {
        return {type: types.APP_SUCCESS, payload};
    }

    function failure(error) {
        console.log(">> error ", error );
        return {type: types.APP_FAILURE, error};
    }
}


function register(credentials){

    return async dispatch =>{
        dispatch(request());
        let payload = await operations.register(credentials);
        console.log(">>> payload ", payload)
        try{
            dispatch(success());
            return Promise.resolve();
        }catch(error){
            dispatch(failure(error));
            return Promise.reject();
        }
    }   

    function request() {
        return {type: types.REGISTER_REQUEST};
    }

    function success() {
        return {type: types.REGISTER_SUCCESS};
    }

    function failure(error) {
        return {type: types.REGISTER_FAILURE, error};
    }
}

function login(credentials){

    return async dispatch =>{
        dispatch(request());
        const response =  await operations.login(credentials);
        const data = response.data;
        sessionStorage.setItem("token", data.token);
        const user = {
            name: data.name,
            email: data.email
        }
        try{
            dispatch(success(user));
        }catch(error){
            dispatch(failure(error));
        }
    }   

    function request() {
        return {type: types.LOGIN_REQUEST};
    }

    function success(payload) {
        return {type: types.LOGIN_SUCCESS, payload};
    }

    function failure(error) {
        return {type: types.LOGIN_FAILURE, error};
    }
}

function getBlogList() {
    return async dispatch =>{

        dispatch(request());
        try{
            const response = await operations.getBlogList();
            const data = await response.data;
            
            dispatch(success(data));

        }catch(error){
            dispatch(failure(error));
        }
    }

    function request() {
        return {type: types.BLOG_LIST_REQUEST};
    }

    function success(payload) {
        return {type: types.BLOG_LIST_SUCCESS, payload};
    }

    function failure(error) {
        return {type: types.BLOG_LIST_FAILURE, error};
    }
}

function getArticleById(id) {
    return async dispatch =>{

        dispatch(request());
        try{
            const response = await operations.getArticleById(id);
            const data = await response.data.article;
            
            dispatch(success(data));

        }catch(error){
            dispatch(failure(error));
        }
    }

    function request() {
        return {type: types.ARTICLE_REQUEST};
    }

    function success(payload) {
        return {type: types.ARTICLE_SUCCESS, payload};
    }

    function failure(error) {
        return {type: types.ARTICLE_FAILURE, error};
    }
}

export default actions;

