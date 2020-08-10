import React, { Component } from "react";

class Work extends Component {
  render() {
    return (
      <div>
        <div>
          <span className="navHeaders">{this.props.name}</span>
        </div>
      </div>
    );
  }
}

export default Work;
