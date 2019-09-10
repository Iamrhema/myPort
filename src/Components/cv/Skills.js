import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";

class Skills extends Component {
  render() {
    return (
      <Grid>
        <Cell col={12}>
          <div style={{ displat: "flex" }}></div>
          {this.props.skill}{" "}
          <ProgressBar
            style={{ margin: "auto", width: "75%" }}
            progress={this.props.progress}
            buffer={87}
          />
        </Cell>
      </Grid>
    );
  }
}

export default Skills;
