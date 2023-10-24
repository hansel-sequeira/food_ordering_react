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

const CardContainer = (props) => {
    console.log(props);
    const { name, cuisine, rating, distance } = props;
    return (
        <div className="card-container">
            <img className="card-img" src={require("./assets/biryani.webp")}></img>
            <div className="card-content">
                <h2>{name}</h2>
                <h3>{cuisine}</h3>
                <h4>{rating}</h4>
                <h4>{distance} mins away</h4>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <CardContainer name="Meghana Foods" cuisine="Asian, South Asian" rating="4.3 stars" distance="38" />
            <CardContainer name="KFC" cuisine="Fried Chicken, Fast Food" rating="4.7 stars" distance="11" />
            <CardContainer name="McDonalds" cuisine="Burgers, Fast Food" rating="4.1 stars" distance="45" />
            <CardContainer name="Pizza Hut" cuisine="Pizza, Fast Food" rating="3.8 stars" distance="109" />
        </div>
    )
}


const AppContent = () => {
    return (
        <div>
            <Header />
            <Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppContent />);