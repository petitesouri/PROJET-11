// REDUX
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../redux/reducers/index";
import { getPosts } from "../redux/actions/post.action";

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});

store.dispatch(getPosts())

const Login = () => {
    return (
        <Provider store={store}>
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    { /* insérer ici le form */}
                </section>
            </main>
        </Provider>
    )
}

export default Login;