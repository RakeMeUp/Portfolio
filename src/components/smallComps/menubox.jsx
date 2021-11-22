import React, { Component } from "react";
import menuIcon from "../../img/hamburger.svg";

class Menubox extends Component {
  render() {
    return (
      <div id="menubox" className=" fixed right-0 flex z-10">
        {/* to make the inverse rounded corner, you have to make an invisible
        div, round down the opposite corner, drop a blurless shadow thats the 
        color of the target div. */}
        <div className="w-5 h-5 rounded-tr-xl shadow-tl-hack"></div>
        <div className="flex flex-col items-end">
          <div
            id="navbar-box"
            className=" w-16 h-16 bg-black text-white rounded-bl-2xl flex justify-center items-center "
          >
            <img
              /* I put the onclick on the img, so it wont trigger twice when
            clicking on edge of elements */
              onClick={this.props.handleClick}
              src={menuIcon}
              alt="menu icon"
              id="hamburger"
              className=" navbar w-10"
            />
          </div>

          <div className="w-5 h-5 rounded-tr-xl shadow-br-hack"></div>
        </div>
      </div>
    );
  }
}

export default Menubox;
