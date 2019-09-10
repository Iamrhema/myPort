import React from "react";
import {
  CardText,
  Card,
  CardActions,
  CardTitle,
  IconButton,
  Button,
  MenuItem,
  Menu
} from "react-mdl";
import { CardMenu } from "react-mdl/lib/Card";

const WebDevProject = () => (
  <div className="row">
    <div className="projectDiv">
      <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
        <CardTitle
          className="WebDev"
          style={{ color: "white", height: "176px" }}
        >
          <div className="ProjectName text-center">My project</div>
        </CardTitle>
        <CardText>
          This is my first Website I ever fully fully created using Html and
          Css. It is a static Website with no functionability it is meant to
          show my art work and cv.{" "}
        </CardText>
        <CardActions border>
          <Button colored>
            <a
              href="https://github.com/Iamrhema/First-Webpage"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </a>
          </Button>
          <Button colored>
            <a
              href="https://iamrhema.github.io/First-Webpage/cv.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              Live Demo
            </a>
          </Button>
          <Button colored>Codepen</Button>
        </CardActions>
      </Card>
    </div>

    <div className="projectDiv">
      <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
        <CardTitle
          className="WebDev"
          style={{ color: "white", height: "176px" }}
        >
          <div className="ProjectName text-center">Auto-Gun store</div>
        </CardTitle>
        <CardText>
          This is a Static Eccomerece website made with Html,Css and Boostrap.
          It is a gun store with with 2 pages the in the navgiation bar the link
          thta re in opertional are is Assualt Rifles and About us.
        </CardText>
        <CardActions border>
          <Button colored>
            {" "}
            <a
              href="https://github.com/Iamrhema/Static-Eccomerece"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </a>
          </Button>
          <Button colored>
            <a
              href="https://iamrhema.github.io/Static-Eccomerece/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Live Demo
            </a>
          </Button>
          <Button colored>Codepen</Button>
        </CardActions>
        <CardMenu style = {{color:"white" }}>
          <IconButton name="more_vert" id="demo-menu-lower-right" />
          <Menu target="demo-menu-lower-right" align="right">
            <MenuItem>boostrap</MenuItem>
          </Menu>
        </CardMenu>
      </Card>
    </div>
  </div>
);

export default WebDevProject;
