
import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { getAllUserReducer } from "./getAllUserReducer";

const rootReducer = combineReducers({
    authReducer,
    getAllUserReducer,
})

export default rootReducer;