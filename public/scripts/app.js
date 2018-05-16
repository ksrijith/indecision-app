"use strict";

console.log("This is from app.js");

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "This is from jsx file"
    ),
    React.createElement(
        "p",
        null,
        "this is some info"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item one"
        ),
        React.createElement(
            "li",
            null,
            "Item two"
        )
    )
);

var app = document.getElementById("app");

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Srijith Kartha"
    ),
    React.createElement(
        "p",
        null,
        "Age: 35"
    ),
    React.createElement(
        "p",
        null,
        "Location: Bengaluru"
    )
);

ReactDOM.render(templateTwo, app);
