import { ADD_POST, GET_USER, EDIT_MODE, LOG_OUT, LOGIN_FAILED } from "../actions/post.action";

const initialState = {
    token: "",
    login: false,
    errorMessage: null,
    editMode: false,
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
        case EDIT_MODE:
            return {
                ...state,
                editMode: action.payload,
            }
        case LOGIN_FAILED:
            return {
                ...state,
                errorMessage: action.errorMessage,
            }
        case LOG_OUT:
            return {
                payload: action.payload,
            }
        default:
            return state;
    }
}

export default postReducer;