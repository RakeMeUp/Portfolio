import React, { Component } from "react";
import $ from "jquery";
//Small Components
import Menubox from "../smallComps/menubox.jsx";
import Modal from "../smallComps/modal.jsx";
import ListEl from "../smallComps/ListEl.jsx";
//Items
import racc from "../../img/racc.png";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalPressed: false,
      menuOpen: false,
    };
  }

  animateOpen = () => {
    //first the drawer move so wont leave gap while sliding
    $("#drawer").animate({
      right: "0px",
    });
    $("#menubox").animate({
      right: "13rem",
    });
  };

  animateClose = () => {
    $("#menubox").animate({
      right: "0px",
    });
    $("#drawer").animate({
      right: "-13rem",
    });
  };

  handleClick = () => {
    this.setState((prevState) => ({
      menuOpen: !prevState.menuOpen,
    }));
    if (this.state.menuOpen) {
      this.animateClose();
    } else {
      this.animateOpen();
    }
  };

  showModal = () => {
    this.setState((prevState) => ({
      modalPressed: !prevState.modalPressed,
    }));
  };

  render() {
    return (
      <div id="navbar">
        {this.state.menuOpen && (
          <div
            onClick={this.handleClick}
            className="z-10 w-full h-screen fixed bg-transparent"
          ></div>
        )}
        {this.state.modalPressed && <Modal handleClose={this.showModal} />}
        <Menubox handleClick={this.handleClick} />
        <div
          id="drawer"
          className="z-10 fixed -right-52 flex flex-col items-end"
        >
          <div
            id="list-container"
            className=" rounded-bl-xl bg-black w-52 text-white items-center justify-center flex relative"
          >
            <img
              onClick={this.showModal}
              src={racc}
              alt="lil raccoon"
              className="absolute top-2 right-2 w-10"
            />
            <ul>
              <ListEl link={"#hero"} text={"Home"} />
              <ListEl link={"#badges"} text={"Badges"} />
              <ListEl link={"#projects"} text={"Projects"} />
              <ListEl link={"#contacts"} text={"Contacts"} />
            </ul>
          </div>
          <div className="w-5 h-5 rounded-tr-xl shadow-br-hack"></div>
        </div>
      </div>
    );
  }
}

export default Navbar;
