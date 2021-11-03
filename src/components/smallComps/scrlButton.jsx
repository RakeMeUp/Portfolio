import React, { Component } from "react";

class Scrlbutton extends Component {
  handleClick = () => {
    document.getElementById(this.props.target).scrollIntoView();
  };

  render() {
    return (
      <button onClick={this.handleClick} className={this.props.className}>
        <span>{this.props.text}</span>
      </button>
    );
  }
}

export default Scrlbutton;
