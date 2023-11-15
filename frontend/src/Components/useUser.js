import { useDispatch, useSelector } from "react-redux";
import { GET_USER } from '../redux/actions/post.action';

export const POST = 'POST';
export const PUT = 'PUT';

export function useUser() {
    const dispatch = useDispatch();
    const token = useSelector(state => state.postReducer.token);

    const fetchData = async (method, data) => {
            const req = await fetch("http://localhost:3001/api/v1/user/profile", {
                method,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });
            const response = await req.json()
            
            if (response.status === 200) {
                dispatch({ 
                    type: GET_USER, 
                    email: response.body.email, 
                    firstName: response.body.firstName, 
                    lastName: response.body.lastName, 
                    userName: response.body.userName
                }); 
                return              
            } 
            throw new Error("Erreur lors de la requête fetch");
              
    }
    return {
        fetchData
    };
}
