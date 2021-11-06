import React from "react";
import Menubox from "./menubox.jsx";
import $ from "jquery";
import ListEl from "./smallComps/ListEl.jsx";
import racc from "../img/racc.png";
import Modal from "./modal.jsx";

export default function Navbar() {
  let isOpen = false;

  let animateOpen = () => {
    //first the drawer move so wont leave gap while sliding
    $("#drawer").animate({
      right: "0px",
    });
    $("#menubox").animate({
      right: "13rem",
    });
  };

  let animateClose = () => {
    $("#menubox").animate({
      right: "0px",
    });
    $("#drawer").animate({
      right: "-13rem",
    });
  };

  let handleClick = () => {
    if (!isOpen) {
      animateOpen();
      isOpen = true;
    } else if (isOpen) {
      animateClose();
      isOpen = false;
    }
  };

  let showModal = () => {
    $("#modal").removeClass("hidden");
    $("#modal").addClass("flex");
  };

  //global click listener, if user clicks out of navbar, it closes
  $(document).on("click", function (event) {
    if (!isOpen) {
      //Do nothing
    } else if (
      !$(event.target).is("#drawer") &&
      !$(event.target).is("#hamburger")
    ) {
      animateClose();
      isOpen = false;
    }
  });

  return (
    <div>
      <Modal />
      <Menubox handleClick={handleClick} />
      <div id="drawer" className="z-10 fixed -right-52 flex flex-col items-end">
        <div
          id="list-container"
          className=" rounded-bl-xl bg-black w-52 text-white items-center justify-center flex relative"
        >
          <img
            onClick={showModal}
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
