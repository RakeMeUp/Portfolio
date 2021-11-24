import React from "react";
import ReactDOM from "react-dom";
import Hero from "./components/sections/hero.jsx";
import Badges from "./components/sections/badges.jsx";
import Projects from "./components/sections/projects.jsx";
import Contacts from "./components/sections/contacts.jsx";
import Navbar from "./components/sections/navbar.jsx";
import Footer from "./components/sections/footer.jsx";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Badges />
    <Projects />
    <Contacts />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
