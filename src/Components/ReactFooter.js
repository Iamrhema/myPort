import React, { Component } from "react";
import { Footer, FooterSection, FooterLinkList } from "react-mdl";

class ReactFooter extends Component {
  render() {
    return (
      <Footer size="mini">
      
        <FooterSection type="middle" logo="©Rhema Makamba 2020">
          <FooterLinkList>
            <a herf="#">Help</a>
            <a herf="#">Privacy Terms</a>
            <a
              href="mailto:rhemaexel7@gmail.com"
            >
              <i className="fa fa-envelope" aria-hidden="true" />
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
              href="https://www.linkedin.com/in/rhema-exel-225a52178/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>
            {/* Facebook */}
            <a
              href="https://www.instagram.com/rhema.exel/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-instagram" aria-hidden="true" />
            </a>
          </FooterLinkList>
        </FooterSection>
      </Footer>
    );
  }
}

export default ReactFooter;
