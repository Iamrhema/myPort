import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./cv/Education";
import Experience from "./cv/Experience";
import { ProgressBar } from "react-mdl";
import Header from "./Header";

class Resume extends Component {
  render() {
    return (
      <div style={{ marginTop: "100px", marginBottom: "100px" }}>
        <div
          id="Resume"
          className="text-center"
          style={{ marginBottom: "100px" }}
        >
          <Header name="Resume" />
        </div>
        <Grid>
          <Cell col={4}>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>12 Goldsmith Road Salt River</p>
            <h5>Phone</h5>
            <p>(+27) 623-276-851</p>
            <h5>Email</h5>
            <p><a href = "mailto:rhemaexelgmail.com">rhemaexelgmail.com</a></p>
            <h5>Linkedin</h5>
            <p>
              <a
                href="https://www.linkedin.com/in/rhema-exel-225a52178/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Rhema Exel
              </a>
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="CvRight" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2014}
              endYear={2018}
              schoolName="Windermere High SChool"
              schoolDescription="High School based in Factreton Cape Town."
            />
            <Education
              startYear="April 2019"
              endYear="October 2019"
              schoolName="Life Choices (Coding Bootcamp)"
              schoolDescription="A six month Coding Bootcamp."
            />
             <Education
              startYear="February 2020"
              endYear="current"
              schoolName="Pearson Institute of Higher Education (PIHE)"
              schoolDescription="Information Technology"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>
            <Experience
              JobDuration="2 months"
              JobName="Coder Dojo (Coding Volunteer)"
              JobDescription="Volunteered to help the children at the Obsevatory learn aspects of coding and assisstated them in their progress of learning."
            />
           
            <ProgressBar
              style={{ margin: "auto", width: "100%" }}
              progress={this.props.progress}
              buffer={87}
            />
            <h2>Skills</h2>
            <div className="row">
              <div>
                <div className="skills text-center" id="python"></div>
                <div className="text-center">
                  <span>Python</span>
                </div>
              </div>
              <div>
                <div className="skills text-center" id="react"></div>
                <div className="text-center">
                  <span>React JS</span>
                </div>
              </div>
              <div>
                <div className="skills text-center" id="javascript"></div>
                <div className="text-center">
                  <span>Javascript</span>
                </div>
              </div>
              <div>
                <div className="skills text-center" id="Node"></div>
                <div className="text-center">
                  <span>Node JS</span>
                </div>
              </div>
              <div>
                <div className="skills text-center" id="jquery"></div>
                <div className="text-center">
                  <span>Jquery</span>
                </div>
              </div>
              <div>
                <div className="skills text-center" id="Html"></div>
                <div className="text-center">
                  <span>Html</span>
                </div>
              </div>
              <div>
                <div className="skills text-center" id="express"></div>
                <div className="text-center">
                  <span>Express</span>
                </div>
              </div>
              <div>
                <div className="skills text-center" id="css"></div>
                <div className="text-center">
                  <span>Css</span>
                </div>
              </div>
              <div>
                <div className="skills text-center" id="java"></div>
                <div className="text-center">
                  <span>Java</span>
                </div>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Resume;
