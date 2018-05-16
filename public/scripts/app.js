"use strict";

console.log("This is from app.js");
var template = React.createElement(
  "h1",
  null,
  "This is from jsx file"
);
var app = document.getElementById("app");
ReactDOM.render(template, app);
