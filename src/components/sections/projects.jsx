import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <article
        id="projects"
        className="h-screen w-full bg-templatePrimary relative"
      >
        <svg
          className="absolute top-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#E5E5E5"
            fillOpacity="1"
            d="M0,224L48,218.7C96,213,192,203,288,192C384,181,480,171,576,160C672,149,768,139,864,154.7C960,171,1056,213,1152,202.7C1248,192,1344,128,1392,96L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </article>
    );
  }
}

export default Projects;
