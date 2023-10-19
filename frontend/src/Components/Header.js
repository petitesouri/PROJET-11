// import {Link} from "react-router-dom";
import Logo from "../assets/argentBankLogo.png"

const Header = () => {
    return (
        <header className="main-nav">
            <a className="main-nav-logo" href="../src/index.js">
                <img src={Logo} alt="Argent Bank-Logo" className="main-nav-logo-image"/>
            </a>
            {/* <Link to="/"><div>BOUTON</div></Link> */}
            {/*
            <Link to="/" className="main-nav-logo">
                <img src={Logo} alt="Argent Bank-Logo" className="main-nav-logo-image"/>
            </Link>
            <h1 className="sr-only">Argent Bank</h1>
            <NavLink to="/Login" className="main-nav-item">
                <i class="fa fa-user-circle"></i>
                Sign In
            </NavLink>
            */}
        </header>
    )
}

export default Header;