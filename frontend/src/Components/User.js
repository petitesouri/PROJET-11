import { useSelector, useDispatch } from "react-redux"
import { GET_USER } from '../redux/actions/post.action';

const User = () => {
    const token = useSelector(state => state.postReducer.token.token)
    const dispatch = useDispatch()

    const fetchData = async () => {
        const response = await fetch("http://localhost:3001/api/v1/user/profile",{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                });
        const datas = await response.json();
        
        dispatch({ 
            type: GET_USER, 
            email: datas.body.email, 
            firstName: datas.body.firstName, 
            lastName: datas.body.lastName, 
            userName: datas.body.userName})
    }
    fetchData();  
} 

export default User;
