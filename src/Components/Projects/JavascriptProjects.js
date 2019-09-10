import React from "react";
import {
  CardText,
  Card,
  CardActions,
  CardTitle,
  IconButton,
  Button,
  Menu,
  MenuItem
} from "react-mdl";
import { CardMenu } from "react-mdl/lib/Card";

const JavascriptProject = () => (
  <div className="row">
    {/* Project 1 */}
    <div className="projectDiv">
      <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
        <CardTitle
          className="Javascript"
          style={{ color: "white", height: "176px" }}
        >
          <div className="ProjectName text-center">JavaScript Apps</div>
        </CardTitle>
        <CardText>
          This is Contains a Calculator which is created using JavaScript , a
          Currency convert , a click counter which are all made with JavaScript.
        </CardText>
        <CardActions border>
          <Button colored>
            <a
              href="https://github.com/Iamrhema/JavaScript-App"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </a>
          </Button>
          <Button colored>
            <a
              href="https://iamrhema.github.io/JavaScript-App/#"
              rel="noopener noreferrer"
              target="_blank"
            >
              Live Demo
            </a>
          </Button>
        </CardActions>
        <CardMenu style={{ color: "#fff" }}>
          <IconButton name="more_vert" id="content_0"/>
          <Menu target="content_0" align="right">
            <MenuItem>Jquery</MenuItem>
            <MenuItem>boostrap</MenuItem>
            <MenuItem>Html/Css</MenuItem>
          </Menu>
        </CardMenu>
      </Card>
    </div>
  {/* Project 2 */}
    <div className="projectDiv">
      <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
        <CardTitle
          className="Javascript"
          style={{ color: "white", height: "176px" }}
        >
          <div className="ProjectName text-center">Car Website</div>
        </CardTitle>
        <CardText>
          his is a fully made JavaScript website using Html as a template to
          show the content. It is a car website which shows content.
        </CardText>
        <CardActions border>
          <Button colored>
            <a
              href="https://github.com/Iamrhema/JS-CarWebsite"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </a>
          </Button>
          <Button colored>
            <a
              href="https://iamrhema.github.io/JS-CarWebsite/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Live Demo
            </a>
          </Button>
        </CardActions>
        <CardMenu style={{ color: "#fff" }}>
        <IconButton name="more_vert" id="content_1"/>
          <Menu target="content_1" align="right">
            <MenuItem>Jquery</MenuItem>
            <MenuItem>boostrap</MenuItem>
            <MenuItem>Html/Css</MenuItem>
          </Menu>
        </CardMenu>
      </Card>
    </div>
    <div className="projectDiv">
      <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
        <CardTitle
          className="Javascript"
          style={{ color: "white", height: "176px" }}
        >
          <div className="ProjectName text-center">
            Second Ammenmant (Gun store)
          </div>
        </CardTitle>
        <CardText>
          This is semi interactive JavaScript eCommerce website where you buy
          your products(guns) and an Alert pops up with the total pricing of
          every product and show you the total price if you want to buy.
        </CardText>
        <CardActions border>
          <Button colored>
            <a
              href="https://github.com/Iamrhema/Gun-eccomerec-Site"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </a>
          </Button>
          <Button colored>
            <a
              href="https://iamrhema.github.io/Gun-eccomerec-Site/index.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              Live Demo
            </a>
          </Button>
        </CardActions>
        <CardMenu style ={{ color: "#fff" }}>
        <IconButton name="more_vert" id="content_2"/>
          <Menu target="content_2" align="right">
            <MenuItem>Jquery</MenuItem>
            <MenuItem>boostrap</MenuItem>
            <MenuItem>Html/Css</MenuItem> 
          </Menu>
        </CardMenu>
      </Card>
    </div>
  </div>
);

export default JavascriptProject;
