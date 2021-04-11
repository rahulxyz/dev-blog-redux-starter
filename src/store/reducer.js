import types from './types';

const initialState = {
    user: null,
    isAuthorised: false,
    error: ""
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
            }

        default: return state;
    }
}

export default app;