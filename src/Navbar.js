import React from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "./images/logo.jpeg";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar__container">
      <div className ="navbar" >
            <div>
              <h2 className ="navbar__title">   </h2>
            </div>
            <div>
              <img alt="logo" src={logo}></img>
            </div>

            <div className ="navbar__button">
              <IconButton   color="primary" aria-label="menu">
                <MenuIcon className="navbar__icon"  />
              </IconButton>
            </div>
      </div>
    </div>
  );
}

export default Navbar;
