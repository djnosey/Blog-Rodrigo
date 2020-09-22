import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "./images/logo.jpeg";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div className ="navbar" >
            <div>
              <h2 className ="navbar__title">  avisoemdois.com.br </h2>
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
