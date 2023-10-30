import logo from "../../assets/logo.jpeg"
import { useState } from "react"
import { Link } from "react-router-dom";


const Header = () => {
    const [loginState, setLoginState] = useState("Login");

    return (
        <div className="header">
            <div className="logoContainer">
                <img src={logo} className="logo"></img>
            </div>
            <div className="navbar">
                <ul className="navbar-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {
                        setLoginState(loginState === "Login" ? "Logout" : "Login");
                    }}>
                        {loginState}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;