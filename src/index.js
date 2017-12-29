import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import $ from "jquery";

ReactDOM.render(<App />, document.getElementById("root"));

$(document).ready(() => {
  const randomColorChange =
    "#" + ((Math.random() * 0xffffff) << 0).toString(16);
  $("body").css(
    "transition",
    "background-color 2s ease",
    "background-color",
    randomColorChange
  );
  $("button").css(
    "transition",
    "background-color 2s ease",
    "background-color",
    randomColorChange
  );
});
