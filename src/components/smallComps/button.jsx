import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div className=" bg-templatePrimary rounded-lg flex items-center justify-center p-2 font-bold active:bg-opacity-50">
        <a href={this.props.link}>
          <span>{this.props.text}</span>
        </a>
      </div>
    );
  }
}

export default Button;
