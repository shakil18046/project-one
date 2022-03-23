import React from "react";
import logo from "./../../images/Logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <nav className="header">
      <div className="container">
        <div className="logo_wrapper">
          <img className="site_logo" src={logo} alt=""></img>
        </div>
        <div className="nav_item_wrapper">
          <ul>
            <li className="nav_item">
              <a className="nav_item_link" href=" # ">
                Order
              </a>
            </li>
            <li className="nav_item">
              <a className="nav_item_link" href=" # ">
                Order Review
              </a>
            </li>
            <li className="nav_item">
              <a className="nav_item_link" href=" # ">
                Manage Inventory
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
