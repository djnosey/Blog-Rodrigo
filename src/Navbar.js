import React from "react";
import { Button } from "@material-ui/core";
import logo from "./images/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

function Navbar() {
  return (
    <div className="navbar__container">
      <div className="navbar">
        <div className="navbar__title">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/channel/UClXOb1IQs4AIQZI4BqNMGZg"
          >
            <YouTubeIcon
              color="secondary"
              fontSize="default"
              className="navbar__youtube"
            />
          </a>
          <a target="_blank"
          rel="noopener noreferrer" href="https://www.linkedin.com/groups/8308917/">
            <LinkedInIcon
              color="secondary"
              fontSize="default"
              className="navbar__linkedin"
            />
          </a>

          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/avisoemdois">
            <TwitterIcon
              color="secondary"
              fontSize="default"
              className="navbar__twitter"
            />
          </a>
        </div>
        <div>
          <Link to="/">
            <img alt="A2 logo" className="navbar__logo" src={logo}></img>
          </Link>
        </div>

        <div className="navbar__button">
          <Button variant="primary" color="primary">
            Contacto
          </Button>
        </div>
      </div>
      <div className="navbar__box"></div>
    </div>
  );
}

export default Navbar;
