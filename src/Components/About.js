import React, { Component } from "react";
import {Grid,Cell} from "react-mdl"
import Portfolio from "../Images/portfolio.png";
import Header from "./Header";

class About extends Component {
  render() {
    return (
      <div className = "text-center" id="about" style={{marginTop: "100px", marginBottom: "100px"}}>
        <Header name ="About"/>
          <Grid >
            <Cell col={12}  className="text-center">
              <img className="portfolio" src={Portfolio} alt=".." />
            </Cell>
            <Cell col = {12}>
            <h3>Rhema Makamba</h3>
              <div className="about">
               <div style = {{marginTop: "50px"}}> <p >
                  Hey there I am Rhema aYoung innovator with the power of technology in his hands. Im Orignally from the Drc (Democratic Republic of Congo) 
                  am I very passionate about everything tech related because I belive that with technology we can change the world in big ways and small ways.
                  I fell in love with technology at a young age, built my first computer when I was 12 years old, that was when I knew what my career would be.
                </p></div>
              </div>
            </Cell>
          </Grid>
      </div>
    );
  }
}

export default About;
