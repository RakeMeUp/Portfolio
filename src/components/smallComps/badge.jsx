import React, { Component } from "react";

class Badge extends Component {
  render() {
    if (this.props.size === "sm") {
      // render smaller badge
      return (
        <li className="pb-5 flex flex-col items-center">
          <div className="bg-white shadow-md rounded-full flex justify-center items-center w-20 h-20">
            <a href={this.props.link} target="_blank" rel="noreferrer">
              <img className="p-2" src={this.props.img} alt={this.props.alt} />
            </a>
          </div>
          <div className="pt-2 w-32 overflow-hidden text-center text-lg font-black text-inset">
            {this.props.text}
          </div>
        </li>
      );
    } else if (this.props.size === "lg") {
      // render larger badge
      return (
        <li className="pb-5 flex flex-col items-center">
          <div className="bg-white shadow-md rounded-full flex justify-center items-center w-28 h-28">
            <a href={this.props.link} target="_blank" rel="noreferrer">
              <img className="p-3" src={this.props.img} alt={this.props.alt} />
            </a>
          </div>
          <div className="pt-2 w-32 overflow-hidden text-center text-lg font-black text-inset">
            {this.props.text}
          </div>
        </li>
      );
    }
  }
}

export default Badge;
