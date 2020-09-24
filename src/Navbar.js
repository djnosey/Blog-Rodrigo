import React from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "./images/logo.png";
import "./Navbar.css";
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div className="navbar__container">
      <div className="navbar">
        <div>
          <h2 className="navbar__title"> </h2>
        </div>
        <div >
          <Link to = "/"><img alt="A2 logo" className ="navbar__logo" src={logo}></img></Link>
          
        </div>

        <div className="navbar__button">
          <IconButton color="primary" aria-label="menu">
            <MenuIcon className="navbar__icon" />
          </IconButton>
        </div>
      </div>
      <div className="navbar__box"></div>
    </div>
  );
}

export default Navbar;
