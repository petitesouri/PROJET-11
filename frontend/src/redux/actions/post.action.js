export const GET_POSTS = "GET_POSTS"

export const getPosts= () => {
    return (dispatch) => {
        return fetch("http://localhost:3001/posts").then((res) => {
            dispatch({ type: GET_POSTS, payload: res.data})
        })
    }
}  
