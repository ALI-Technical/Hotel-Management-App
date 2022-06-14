import axios from "axios"
import BASE_URI from "../../../Config/baseURI"
import ActionTypes from "../../constant"

const getAllUsers = () => {
    return async (dispatch) => {
        dispatch({
            type: ActionTypes.USER_GETTING_LOADING
        })
        try {
            const users = await axios.get(`${BASE_URI}alluser`, { withCredentials: true })
            if (users.data) {
                // console.log(users.data);
                dispatch({
                    type: ActionTypes.GET_ALL_USERS,
                    payload: users.data
                })
            } else {
                dispatch({
                    type: ActionTypes.SET_ERROR,
                    payload: users
                })
            }
        }
        catch (err) {
            dispatch({
                type: ActionTypes.SET_ERROR,
                payload: err.data
            })
        }
    }
}

export default getAllUsers;