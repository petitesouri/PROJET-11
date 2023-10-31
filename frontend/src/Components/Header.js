import {Link, NavLink} from "react-router-dom";
import Logo from "../assets/argentBankLogo.webp"
import { useSelector, useDispatch } from "react-redux"
import { LOG_OUT } from "../redux/actions/post.action";

const Header = () => {
    const dispatch = useDispatch()
    const login = useSelector(state => state.postReducer.login)

    const handleSignOut = (e) => {
        dispatch({type: LOG_OUT, payload: null })
    }   
    
    return (
        <header className="main-nav">
            <Link to="/" className="main-nav-logo">
                <img src={Logo} alt="Argent Bank-Logo" className="main-nav-logo-image"/>
            </Link>
            <h1 className="sr-only">Argent Bank</h1>
            <NavLink to="/Login" className="main-nav-item" onClick={handleSignOut}>
                <i className="fa fa-user-circle sign-in-icon"></i>
                    {login ? "Sign Out" : "Sign In"}
            </NavLink>
        </header>
    )
}

export default Header;