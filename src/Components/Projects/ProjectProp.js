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


class myCard extends Component {
  render() {
    return (
      <Card
        shadow={5}
        className = "myCard"
      >
        <CardTitle
          className={this.props.background}
          style={{ color: "white", height: "176px", width: "100%"}}
        >
          <div className="ProjectName text-center">{this.props.Name}</div>
        </CardTitle>
        <CardText>{this.props.Description}</CardText>
        <CardActions border>
          <Button colored>
            <a href={this.props.Live} rel="noopener noreferrer" target="_blank">
              Github
            </a>
          </Button>
          <Button colored>
            <a
              href={this.props.Github}
              rel="noopener noreferrer"
              target="_blank"
            >
              Live Demo
            </a>
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default myCard;
