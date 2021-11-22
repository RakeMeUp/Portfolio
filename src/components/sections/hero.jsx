import React, { Component } from "react";
import Button from "../smallComps/button";
import logo from "../../img/HeroLogo.png";

class Hero extends Component {
  render() {
    return (
      <article
        id="hero"
        className=" w-full h-screen flex flex-col items-center bg-templateDark relative"
      >
        {/* Headline */}
        <div className="flex flex-col items-center">
          <div className=" text-5xl text-templateGray pt-12 px-8 max-w-md">
            <div className="font-pacifico float-left pb-5">Hello There</div>
            <div className="font-pacifico float-right">I'm Name</div>
          </div>
          <div className="mt-12 text-l text-templatePrimary">
            Upcoming Web Developer
          </div>
        </div>
        {/* logo */}
        <img
          className="absolute bottom-40 max-h-80"
          src={logo}
          alt="LOGO"
        ></img>
        <div
          id="button-container"
          className=" absolute bottom-20 flex w-full px-8 justify-between"
        >
          <Button link={"#projects"} text={"Projects"} />
          <Button link={"#badges"} text={"Tech Stack"} />
          <Button link={"#contacts"} text={"Contacts"} />
        </div>
        {/* Bottom Curve */}
        <svg
          preserveAspectRatio="none"
          className="absolute bottom-0 max-h-10 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#E5E5E5"
            fillOpacity="1"
            d="M0,0L48,21.3C96,43,192,85,288,101.3C384,117,480,107,576,133.3C672,160,768,224,864,261.3C960,299,1056,309,1152,277.3C1248,245,1344,171,1392,133.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </article>
    );
  }
}

export default Hero;
