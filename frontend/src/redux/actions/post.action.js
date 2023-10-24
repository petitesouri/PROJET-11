export const ADD_POST = "ADD_POST" 

export const addPost= (data) => {
    return async (dispatch) => {
        const req = await fetch("http://localhost:3001/api/v1/user/login",{
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: JSON.stringify(data),
        })

        const response = await req.json()
        console.log(response.body)
        dispatch({ type: ADD_POST, payload: response.body})
        // .then((response) => {
        //     // dispatch({ type: ADD_POST, payload: data})
        //     console.log(response)
        // })
    }
} 