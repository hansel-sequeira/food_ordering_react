import logo from "../../assets/logo.jpeg"
import { useState } from "react"


const Header = () => {
    const [loginState, setLoginState] = useState("Login");

    return (
        <div className="header">
            <div className="logoContainer">
                <img src={logo} className="logo"></img>
            </div>
            <div className="navbar">
                <ul className="navbar-list">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
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