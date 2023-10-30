export const ADD_POST = "ADD_POST" 
export const GET_USER = 'GET_USER'

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
