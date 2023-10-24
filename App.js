import React from "react"
import ReactDOM from "react-dom/client"
import logo from "./assets/logo.jpeg"


const Header = () => {
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
                </ul>
            </div>
        </div>
    )
}


const AppContent = () => {
    return (
        <div>
            <Header />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppContent />);