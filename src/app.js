"use strict";

console.log("This is from app.js");
var template = <h1>This is from jsx file</h1>;
var app = document.getElementById("app");
ReactDOM.render(template, app);