import React from "react";
import "./footer.css";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from '@material-ui/icons/Email';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import TwitterIcon from '@material-ui/icons/Twitter';



function Footer() {
  return (
    <div className="footer">
      <div className="footer__social">
        <div>
          <h4>siga-nos nas redes sociais</h4>
        </div>

        <div>
            <a target ="_blank" rel="noopener noreferrer" href ="https://www.youtube.com/channel/UClXOb1IQs4AIQZI4BqNMGZg">
            <YouTubeIcon
            color="primary"
            fontSize="large"
            className="footer__youtube"
          />

            </a>
          <a target ="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/groups/8308917/">
          <LinkedInIcon
            color="primary"
            fontSize="large"
            className="footer__linkedin"
          />

          </a>

          <a target ="_blank" rel="noopener noreferrer" href="https://twitter.com/avisoemdois">
          <TwitterIcon
            color="primary"
            fontSize="large"
            className="footer__twitter"
          />

          </a>
         
        </div>
      </div>
      <div className="footer__contact">
          <div>
              <h4>contact</h4>
          </div>
          <div className ="footer__email">
              <EmailIcon />
              <p>email@email.com</p>
          </div>
          <div className ="footer__phone">
              <PhoneIphoneIcon />
              <p>0123-456-789</p>
          </div>

      </div>
    </div>
  );
}

export default Footer;
