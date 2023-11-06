import { useDispatch, useSelector } from "react-redux"
import { GET_USER } from '../redux/actions/post.action';
import { Navigate } from 'react-router-dom';

export const POST = 'POST'
// export const PUT = 'PUT'


function User({ method, token }) {
    const dispatch = useDispatch()
    token = useSelector(state => state.postReducer.token.token) 
    
    
    // const newValue = {
    //     userName: useSelector(state => state.postReducer.userName)
    // }

    const fetchData = async () => {
        switch (method) {
            case POST:
                const responsePost = await fetch("http://localhost:3001/api/v1/user/profile", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                })
                const datasUser = await responsePost.json();
                dispatch({ 
                    type: GET_USER, 
                    email: datasUser.body.email, 
                    firstName: datasUser.body.firstName, 
                    lastName: datasUser.body.lastName, 
                    userName: datasUser.body.userName
                })
                return datasUser;
            // case PUT:
            //     const responsePut = await fetch("http://localhost:3001/api/v1/user/profile", {
            //         method: "PUT",
            //         headers: {
            //             "Content-Type": "application/json",
            //             "Authorization": `Bearer ${token}`
            //         },
            //         body: JSON.stringify(newValue),
            //     })
            //     const editDatas = await responsePut.json();
            //     return editDatas;

            default: 
                return ( <Navigate to="/" /> )
        }
    }
    fetchData()
}

export default User;
