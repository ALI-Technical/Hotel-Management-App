import axios from "axios";
import BASE_URI from "../../../Config/baseURI";
import ActionTypes from "../../constant";


const loginAction = (loginUser) => {
    return async (dispatch) => {
        dispatch({
            type: ActionTypes.SET_AUTH_LOADING
        })
        try {
            const res = await axios.post(`${BASE_URI}login`, loginUser, { withCredentials: true });

            if (res.data.error) {
                console.log(res.data.error)
                dispatch({
                    type: ActionTypes.SET_ERROR,
                    payload: res.data.error
                })
            }
            else {
                console.log(res);
                dispatch({
                    type: ActionTypes.USER_LOGIN,
                    payload: res.data.data
                })
            }
        } catch (error) {
            dispatch({
                type: ActionTypes.SET_ERROR,
                payload: error.data
            })
        }
    }
}


export default loginAction