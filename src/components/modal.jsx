import $ from "jquery";
import React, { Component } from "react";
import raccoon from "../img/racc.jpg";

class Modal extends Component {
  render() {
    return (
      <div
        id="modal"
        className="fixed z-50 w-full h-screen bg-black hidden bg-opacity-50 justify-center items-center"
      >
        <div className="mx-5 bg-black rounded-3xl relative overflow-hidden shadow-md">
          <div
            className="w-10 h-10 bg-templatePrimary absolute top-0 right-0 rounded-bl-xl rounded-tr-xl flex justify-center items-center text-white"
            onClick={this.handleClick}
          >
            X
          </div>
          <div>
            <img src={raccoon} alt="lorem" />
          </div>
        </div>
      </div>
    );
  }
  handleClick() {
    $("#modal").removeClass("flex");
    $("#modal").addClass("hidden");
  }
}

export default Modal;
