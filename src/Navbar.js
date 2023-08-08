import React from "react";
import ReactSwitch from "react-switch";

function Navbar(props) {
  return (
    <nav className={props.darkMode ? "dark" : "light"}>
      <img src="../logo192.png" className="nav--icon" />
      <h3 className="nav--logo-text">ReactFacts</h3>

      <div className="toggler">
        <p className="toggler--light">Light</p>

        <div className="switch1">
          <ReactSwitch
            onChange={props.toggleDarkMode}
            checked={props.darkMode ? "dark" : ""}
          />
        </div>

        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
}

export default Navbar;
