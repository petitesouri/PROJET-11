import {Link, NavLink} from "react-router-dom";
import Logo from "../assets/argentBankLogo.webp"

const Header = () => {
    return (
        <header className="main-nav">
            <Link to="/" className="main-nav-logo">
                <img src={Logo} alt="Argent Bank-Logo" className="main-nav-logo-image"/>
            </Link>
            <h1 className="sr-only">Argent Bank</h1>
            <NavLink to="/Login" className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                Sign In
            </NavLink>
        </header>
    )
}

export default Header;