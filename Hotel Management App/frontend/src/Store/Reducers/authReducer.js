import ActionTypes from "../constant";

const INITIAL_STATE = {

    authLoading : false,
    setError : "",
    signupUser : [],
    currentUser : {}

}


const authReducer = (state = INITIAL_STATE , action) =>{
    
    switch(action.type){

            case ActionTypes.SET_AUTH_LOADING:
                return{
                    ...state,
                    authLoading : true
                }

            case ActionTypes.ADD_USER:
                return{
                    ...state,
                    signupUser :[action.payload],
                    authLoading : false,
                    setError : ""
                } 
                
            case ActionTypes.USER_LOGIN:
                return{
                    ...state,
                    currentUser:action.payload,
                    authLoading : false,
                    setError : ""
                }

                case ActionTypes.SET_ERROR:
                    return {
                        ...state,
                        authLoading : false,
                        setError : action.payload,
                        currentUser : {}

                    }
                default :
                return state
        }


    return state;
}


export {
    authReducer
}