import React, { Component } from "react";
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

class Media extends Component{
  render(){
    return(
      <div className="row">
    <div className="projectDiv">
      <Card shadow={5} style={{ minWidth: "450",minHeight: "300px",maxWidth: "450",maxHeight: "300px", margin: "30px" }}>
        <CardTitle
          className = {this.props.background}
          style={{ color: "white", height: "176px" }}>
          <div className="ProjectName text-center">{this.props.Name}</div>
        </CardTitle>
        <CardText>
          {this.props.Description}
        </CardText>
        <CardActions border>
          <Button colored>
            <a
              href= {this.props.Live}
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </a>
          </Button>
          <Button colored>
            <a
              href= {this.props.Github}
              rel="noopener noreferrer"
              target="_blank"
            >
              Live Demo
            </a>
          </Button>
        </CardActions>
      </Card>
    </div>
    </div>
    )
  }
}

export default Media;
