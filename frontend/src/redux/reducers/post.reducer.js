import { ADD_POST } from "../actions/post.action";

const initialState = {}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return action.payload;
        default:
            return state;
    }
}

export default postReducer;