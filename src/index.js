import React from "react";
import ReactDOM from "react-dom";
import Hero from "./components/hero.jsx";
import Badges from "./components/badges.jsx";
import Projects from "./components/projects.jsx";
import Contacts from "./components/contacts.jsx";
import Navbar from "./components/navbar.jsx";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Badges />
    <Projects />
    <Contacts />
  </React.StrictMode>,
  document.getElementById("root")
);
