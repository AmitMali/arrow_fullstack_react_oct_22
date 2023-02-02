import React from "react";

class ClassComponentExample extends React.Component {
  render() {
    return <h1>msg : {this.props.msg}</h1>;
  }
}

export default ClassComponentExample;
