import React, { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addPost } from "../redux/actions/post.action"
import { Navigate } from "react-router-dom"

const PostForm = () => {
    const form = useRef()
    const dispatch = useDispatch()
    const login = useSelector(state => state.postReducer.login)
    
    const handleForm = e => {
        e.preventDefault()
        const postData = {
            email: form.current[0].value,
            password: form.current[1].value
        }
        dispatch(addPost(postData))
    }
    
    if ( login===true ) {                     
        return (      
            <Navigate to="/profile" /> 
        )       
    }

    return (        
        <form ref={form} onSubmit={e => handleForm(e)} >
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
            </div>
            {/* <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">
                    Remember me
                </label>
            </div> */}
            <button type="submit" className="sign-in-button" value="Send">Sign In</button>                       
        </form>
    )
}

export default PostForm;