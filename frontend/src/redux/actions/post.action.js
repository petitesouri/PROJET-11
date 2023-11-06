export const ADD_POST = "ADD_POST" 
export const GET_USER = 'GET_USER'
export const EDIT_MODE = 'EDIT_MODE'
export const EDIT_USER = 'EDIT_USER'
export const LOG_OUT = 'LOG_OUT'

export const addPost= (data) => {
    return async (dispatch) => {
        const req = await fetch("http://localhost:3001/api/v1/user/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })
        const response = await req.json()
        if ( response.status === 200 ) {
            dispatch({ type: ADD_POST, payload: response.body, login:true})
        }
    }
}

export const getUser = (userDatas) => {
    return {
        type: GET_USER,
        email: userDatas.email,
        firstName: userDatas.firstName,
        lastName: userDatas.lastName,
        userName: userDatas.userName
    }
}
export const editMode = (dispatch) => {
    return {
        type: EDIT_MODE,
        editMode: dispatch.payload,
    }
}

export const editUser = (userDatas) => {
    return {
        type: EDIT_USER,
        userName: userDatas.userName
    }
}

export const logOut = ( ) => {
    return {
        type: LOG_OUT,
        email: '',
        firstName: '',
        token: '',
        logout: false
    }
}
