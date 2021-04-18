import types from './types';

const initialState = {
    user: null,
    isAuthorised: true,
    error: "",
    blogList:[],
    article:{}
}

function app(state= initialState, action){

    switch(action.type){
        case types.APP_SUCCESS:
            return {
                ...state,
                data: action.payload
            };
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                user: action .payload,
                isAuthorised: true,
                error: ""
            };
        case types.BLOG_LIST_SUCCESS:
            return {
                ...state,
                blogList: action.payload
            }
        case types.ARTICLE_SUCCESS:
                return {
                    ...state,
                    article: action.payload
                }
        default: return state;
    }
}

export default app;