import { LOGO_URL } from "./utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  // let btnName = "Login";

  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <Link to='/'>Home</Link>
          <Link to="/about">About Us</Link>
          <Link to='/contact'>Contact Us</Link>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              // btnName = 'Logout' // js variable
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
