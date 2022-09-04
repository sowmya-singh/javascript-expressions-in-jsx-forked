import React from "react";
import ReactDOM from "react-dom";
var fname = "Sowmya";
var lname = "Singh";
const no = 3;
ReactDOM.render(
  <div>
    <h1>Hello {fname + " " + lname}!</h1>
    <p>your lucky no is {no}</p>
  </div>,
  document.getElementById("root")
);
