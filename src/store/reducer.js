import types from './types';

const initialState = {
    appStore: true,
    data: {}
}

function app(state= initialState, action){

    switch(action.type){
        case types.APP_SUCCESS:
            return {
                ...state,
                data: action.payload
            };

        default: return state;
    }
}

export default app;