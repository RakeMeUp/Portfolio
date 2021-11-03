import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app.jsx";
import Hero from "./components/hero.jsx";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Hero />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
