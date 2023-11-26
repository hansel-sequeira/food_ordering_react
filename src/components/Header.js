import logo from "../../assets/logo.jpeg"
import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import useStatus from "../../utils/useStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";
import store from "../../utils/appStore";



const Header = () => {
    const [loginState, setLoginState] = useState("Login");
    const status = useStatus();
    const { loggedInUser } = useContext(UserContext);
    const cartData = useSelector(store => store.cart.cartItems);

    console.log(cartData)
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
                    <li><Link to="/cart">Cart ({cartData.length})</Link></li>
                    <button className="login-btn" onClick={() => {
                        setLoginState(loginState === "Login" ? "Logout" : "Login");
                    }}>
                        {loginState}
                    </button>
                    <li>{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;