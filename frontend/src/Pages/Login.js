import PostForm from "../Components/PostForm";
import { useSelector } from "react-redux"

const Login = () => {
    const loginFailed = useSelector(state => state.postReducer.errorMessage);
    
    return (        
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                { loginFailed ? <p className="error-message">{loginFailed}</p> : null }
                <PostForm />
            </section>
        </main>        
    )
}

export default Login;