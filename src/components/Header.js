import logo from "../../assets/logo.jpeg"

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

export default Header;