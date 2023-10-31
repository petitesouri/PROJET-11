import { ADD_POST, GET_USER, LOG_OUT } from "../actions/post.action";

const initialState = {
    token:"",
    login:false
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                token: action.payload,
                login: true
            };
        case GET_USER:
            return {
                ...state,
                email: action.email,
                firstName: action.firstName,
                lastName: action.lastName,
                username: action.userName
            };
        case LOG_OUT:
            return {
                payload: action.payload,
            }
        default:
            return state;
    }
}

export default postReducer;