import { useRef, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addPost, loginFailed } from "../redux/actions/post.action"
import { useUser, POST } from "../Components/useUser"

const PostForm = () => {
    const form = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { fetchData } = useUser()
    const login = useSelector(state => state.postReducer.login)
    
    const handleForm = async (e) => {
        e.preventDefault()
        const postData = {
            email: form.current[0].value,
            password: form.current[1].value
        }
        try {
            dispatch(addPost(postData))
        } catch (error) {
            dispatch(loginFailed())
        } 
    }
    
    useEffect(() => {
        if ( login === true) {          
            fetchData(POST)
            navigate('/profile')
        } 
    },[login])
    
    return (        
        <>
        <form ref={form} onSubmit={handleForm} >
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">
                    Remember me
                </label>
            </div>
            <button type="submit" className="sign-in-button" value="Send">Sign In</button>                       
        </form>
        </>
    )
}

export default PostForm;