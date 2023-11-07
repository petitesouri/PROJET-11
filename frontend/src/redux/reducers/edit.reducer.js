import { EDIT_MODE } from "../actions/edit.action";

const initialState = {
    editMode: false
}

const editReducer = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_MODE:
            return {
                ...state,
                editMode: action.payload,
            }
        default:
            return state;
    }
}

export default editReducer;