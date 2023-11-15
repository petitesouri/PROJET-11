export const ADD_POST = "ADD_POST" 
export const GET_USER = 'GET_USER'
export const LOG_OUT = 'LOG_OUT'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const EDIT_MODE = 'EDIT_MODE'

export const addPost= (data) => {
    return async (dispatch) => {
        try {
            const req = await fetch("http://localhost:3001/api/v1/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            if ( req.status === 200 ) {
                const response = await req.json()
                dispatch({ type: ADD_POST, token: response.body.token, login:true })
            } else {
                dispatch(loginFailed("wrong login credentials"))
            } 
        } catch {
            dispatch(loginFailed("Connexion error"))
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

export const logOut = ( ) => {
    return {
        type: LOG_OUT,
        email: '',
        firstName: '',
        token: '',
        logout: false
    }
}

export const loginFailed = (errorMessage) => {
    return {
        type: LOGIN_FAILED,
        errorMessage
    }
}