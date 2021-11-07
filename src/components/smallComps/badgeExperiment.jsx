import React, { Component } from "react";

class Badge extends Component {
  render() {
    return (
      <li className="pb-5 flex flex-col items-center">
        <div
          className={
            "bg-white shadow-md rounded-full flex justify-center items-center" +
            " w-" +
            this.props.size +
            " h-" +
            this.props.size
          }
        >
          <img
            className={"p-" + this.props.imgPadding}
            src={this.props.img}
            alt={this.props.alt}
          />
        </div>
        <div className="pt-2 w-32 overflow-hidden text-center text-lg font-black text-inset">
          {this.props.text}
        </div>
      </li>
    );
  }
}

Badge.defaultProps = {
  size: "28",
  text: "Add Text Here",
  imgPadding: "3",
};

export default Badge;
