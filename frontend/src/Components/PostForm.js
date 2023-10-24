import React, { useRef } from "react"
import {  useDispatch } from "react-redux"
import { addPost } from "../redux/actions/post.action"

const PostForm = () => {
    const form = useRef()
   // const userName = useSelector((state) => state.userReducer)
    const dispatch = useDispatch()

    const handleForm = e => {
        e.preventDefault()
        const postData = {
            email: form.current[0].value,
            password: form.current[1].value
        }
        dispatch(addPost(postData))
    }

    return (
        <form ref={form} onSubmit={e => handleForm(e)}>
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
            {/* <a href="./user.html" className="sign-in-button">Sign In</a> */}
            <button type="submit" className="sign-in-button" value="Send">Sign In</button>                        
        </form>
    )
}

export default PostForm;