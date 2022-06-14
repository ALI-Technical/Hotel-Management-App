import axios from "axios";
import BASE_URI from "../../../Config/baseURI";
import ActionTypes from "../../constant";


const signupAction = (userData) => {

    return async (dispatch) => {
        dispatch({
            type: ActionTypes.SET_AUTH_LOADING
        })

        // Set User In Database
        try {

            const res = await axios.post(`${BASE_URI}signup`, userData)
            const message = res.data.message
            console.log(message)
            // console.log(res)
            if (message === "email address is already exist") {
                dispatch({
                    type: ActionTypes.SET_ERROR,
                    payload: message
                })
            }
            else if (message === "Required field are missing") {
                dispatch({
                    type: ActionTypes.SET_ERROR,
                    payload: message
                })
            }
            else {
                dispatch({
                    type: ActionTypes.ADD_USER,
                    payload: res.data
                })
            }
        } catch (error) {
            console.log(error)
        }

    }
}

export default signupAction