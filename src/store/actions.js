import operations from './operations';
import types from './types';

const actions = {
    app
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

export default actions;

