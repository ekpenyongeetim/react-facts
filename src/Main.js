import React from "react";

function Main(props) {
  return (
    <main className={props.darkMode ? "dark" : "light"}>
      <h1 className="main--title">Fun Facts About React</h1>
      <ul className="main--facts">
        <li>Was realeased in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Have well over 100k stars on Github</li>
        <li>Is maintained by facebook</li>
        <li>Powers thousands of enterprise Apps, including mobile APps</li>
        <li>It is your one stop App</li>
      </ul>
    </main>
  );
}

export default Main;
