import logo from "../../assets/logo.jpeg"
import { useState } from "react"
import { Link } from "react-router-dom";
import useStatus from "../../utils/useStatus";


const Header = () => {
    const [loginState, setLoginState] = useState("Login");
    const status = useStatus();

    return (
        <div className="flex justify-between bg-slate-100 items-center shadow-md">
            <div className="logoContainer">
                <img src={logo} className="w-40 h-30"></img>
            </div>
            <div className="pr-10">
                <ul className="flex space-x-8">
                    <li>Online Status: {status == "Online" ? "✅" : "❌"}</li>
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