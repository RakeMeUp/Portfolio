import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <article id="hero" className=" w-full h-screen bg-templateDark relative">
        Hero
        <svg
          className="absolute bottom-0"
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
