import ActionTypes from "../constant";

const INITIAL_STATE = {

    userLoading : false,
    setError : "",
    allUsers : {},

}


const getAllUserReducer = (state = INITIAL_STATE , action) =>{
    
    switch(action.type){

            case ActionTypes.USER_GETTING_LOADING:
                return{
                    ...state,
                    userLoading : true
                }

            case ActionTypes.GET_ALL_USERS:
                return{
                    ...state,
                    allUsers :action.payload,
                    userLoading : false,
                    setError : ""
                } 
                
                case ActionTypes.SET_ERROR:
                    return {
                        ...state,
                        userLoading : false,
                        setError : action.payload,
                    }
                default :
                return state
        }


    return state;
}

export {
    getAllUserReducer
}