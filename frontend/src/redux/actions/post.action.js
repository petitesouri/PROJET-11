export const ADD_POST = "ADD_POST" 

export const addPost= (data) => {
    return (dispatch) => {
        // return fetch("http://localhost:3001/api/v1/user/signup",{
        return fetch("http://localhost:3001/api/v1/user/login",{
            method: "POST",
            body: JSON.stringify(data)
        }
        )
        .then((res) => {
            dispatch({ type: ADD_POST, payload: data})
            console.log(res)
            console.log(JSON.stringify(data))
        })
    }
} 