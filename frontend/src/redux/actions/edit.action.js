export const EDIT_MODE = 'EDIT_MODE'

export const editMode = (dispatch) => {
    return {
        type: EDIT_MODE,
        editMode: dispatch.payload,
    }
}