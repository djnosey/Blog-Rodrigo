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
      <AppBar color="secondary">
        <Toolbar color="secondary">
          <div className="navbar__left">
            <img alt="logo" src={logo}></img>
            <Typography variant="h4">avisoemdois.com.br</Typography>
          </div>
          <div>
            <IconButton edge="end" color="primary" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
