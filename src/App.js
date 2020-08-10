import React, { Component } from "react";
import "./bootstrap/css/bootstrap.css";
import "./App.css";
import Navigation from "./Components/Navigation";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Cv from "./Components/Cv";
import Footer from "./Components/ReactFooter";
import { Parallax } from "react-parallax";
import { Nav, Navbar } from "react-bootstrap";
import Back from "./Images/pexels-photo-1931155.jpeg";
import Icon from "./Images/img3.png";
import Bounce from "react-reveal/Bounce";

class App extends Component {
  render() {
    return (
      //Navigation section 
      <div>
        <Parallax
          bgImage={Back}
          strength={200}
          renderLayer={percentage => (
            <div>
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  borderRadius: "50%",
                  transform: "translate(-50%,-50%)",
                  width: percentage * 500,
                  height: percentage * 500
                }}
              />
            </div>
          )}
        >
          <div style={{ height: "100vh" }}>
            <div>
              <div className="navTop">
                <Navbar collapseOnSelect expand="lg" variant="dark">
                  <Navbar.Brand href="#home">
                    <img src={Icon} alt="icon" className="icon spinner" />
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" style={{ margin: "0 auto" }}>
                      <Nav.Link href="#home">
                        <Bounce top>
                          <h1 className="hover-cut" data-text="home">
                            home
                          </h1>
                        </Bounce>
                      </Nav.Link>
                      <Nav.Link href="#about">
                        <Bounce bottom>
                          <h1 className="hover-cut" data-text="about">
                            about
                          </h1>
                        </Bounce>
                      </Nav.Link>
                      <Nav.Link href="#projects">
                        <Bounce top>
                          <h1 className="hover-cut" data-text="projects">
                            projects
                          </h1>
                        </Bounce>
                      </Nav.Link>
                      <Nav.Link href="#Resume">
                        <Bounce top>
                          <h1 className="hover-cut" data-text="Resume">
                            Resume
                          </h1>
                        </Bounce>
                      </Nav.Link>
                    </Nav>
                    <Nav></Nav>
                  </Navbar.Collapse>
                </Navbar>
              </div>
              <div className="text-center" id="home">
                <img src={Icon} alt="icon me" className="iconImage spinner" />

                <p id="Iam">
                  I am <span id="spin"></span>
                </p>
                <div className="banner-text" style={{ marginTop: "10px" }}>
                  <p>
                    HTML/CSS| Javascript |Boostrap | Python | React |Jquery |
                    Node.js
                  </p>
                  <div className="socialLinks">
                    {/* Insagram */}
                    <a href="mailto:rhemaexel7@gmail.com">
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
                  </div>
                </div>
              </div>
            </div>
            <div class="arrow bounce">
              <a class="fa fa-arrow-down fa-2x" href="#about"></a>
            </div>
          </div>
        </Parallax>
        {/* about me section  */}
        <About />
        {/* my projects section  */}
        <Projects />
        {/* my Resume section  */}
        <Cv />
        {/* my footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
