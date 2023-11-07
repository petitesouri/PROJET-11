// import { ADD_POST, EDIT_USER, EDIT_MODE, GET_USER, LOG_OUT } from "../actions/post.action";
import { ADD_POST, GET_USER, LOG_OUT } from "../actions/post.action";

const initialState = {
    token: "",
    login: false,
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                token: action.token,
                login: action.login,
            };
        case GET_USER:
            return {
                ...state,
                email: action.email,
                firstName: action.firstName,
                lastName: action.lastName,
                userName: action.userName,
            };
        // case EDIT_MODE:
        //     return {
        //         ...state,
        //         editMode: action.payload,
        //     }
        // case EDIT_USER:
        //     return {
        //         ...state,
        //         userName: action.userName,
        //     }
        case LOG_OUT:
            return {
                payload: action.payload,
            }
        default:
            return state;
    }
}

export default postReducer;