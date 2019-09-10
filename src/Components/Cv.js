import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Icon from "../Images/Rhema1.png";
import Education from "./cv/Education";
import Experience from "./cv/Experience";
import Skills from "./cv/Skills";

class Cv extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img style={{ height: "250px" }} src={Icon} alt="MyIcon" />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Rhema Makamba</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Junior Developer with a passion for Art and Poetry. I love to understand how things work because I belive that is the fundamentals
              of creation as a creator myslef (of applications and Art). 
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>12 Goldsmith Road Salt River</p>
            <h5>Phone</h5>
            <p>(+27) 623-276-851</p>
            <h5>Email</h5>
            <p>rhemaexelgmail.com</p>
            <h5>Web</h5>
            <p>Mywebsite.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="CvRight" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2014}
              endYear={2018}
              schoolName="Windermere High SChool"
            />
            <Education
              startYear="April 2019"
              endYear="October 2019"
              schoolName="Life Choices (Coding Bootcamp)"
              schoolDescription="Morbi tempor massa sit amet est tempor, quis luctus sem consec"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>
            <Experience
              JobDuration="2 months"
              JobName="Coding Tutor"
              JobDescription="Helped children with to learn Code (Scratch) at the Coder Dojo at the Science Center Obsevevatory"
            />
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h2>Skills</h2>
            <Skills skill="Javascript" progress={45} />
            <Skills skill="React" progress={30} />
            <Skills skill="Python" progress={50} />

            <Skills skill="Html/Css" progress={75} />
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Cv;
