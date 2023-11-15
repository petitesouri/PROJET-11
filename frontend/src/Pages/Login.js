import PostForm from "../Components/PostForm";
import { useSelector } from "react-redux"

const Login = () => {
    const loginFailed = useSelector(state => state.postReducer.errorMessage);
    
    return (        
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h2 className="sign-in-content__title">Sign In</h2>
                { loginFailed ? <p className="error-message">{loginFailed}</p> : null }
                <PostForm />
            </section>
        </main>        
    )
}

export default Login;