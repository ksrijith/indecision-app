'use strict';

console.log("This is from app.js");

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'This is from jsx file'
    ),
    React.createElement(
        'p',
        null,
        'this is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var user = {
    name: 'Srijith Kartha',
    age: 35,
    location: 'Bengaluru'
};
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

var app = document.getElementById("app");
ReactDOM.render(templateTwo, app);
