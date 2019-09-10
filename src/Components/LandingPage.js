import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Icon from "../Images/Rhema1.png";

class LandingPage extends Component {
  render() {
    return (
      <div  style={{ width: "100%", margin: "auto" }}>
        <Grid className="landingGrid">
          <Cell col={12}>
            {/* Avatar in home page */}
            <img className="Avatar" src={Icon} alt="My Icon" />
            <div className="banner-text">
              <h1>Web Developer</h1>
              {/* <hr /> */}
              <p>
                HTML/CSS| Javascript |Boostrap | Python | React |Jquery |
                Node.js
              </p>
              <div className="socialLinks">
                {/* Insagram */}
                <a
                  href="https://www.instagram.com/rayn_dropz/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>
                {/* Github */}
                <a
                  href="https://github.com/Iamrhema"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/notifications/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/rhema.exel"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default LandingPage;
