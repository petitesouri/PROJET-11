import { combineReducers } from "redux";
import postReducer from "./post.reducer";
import editReducer from "./edit.reducer";

export default combineReducers({
    postReducer,
    editReducer
})