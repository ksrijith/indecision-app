'use strict';

console.log("This is from app.js");

// JSX
var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['Item One', 'Item Two']
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options && app.options.length > 0 ? 'Here are your options' : 'No options'
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

var count = 0;
var addOne = function addOne() {
    count++;
    renderTemplate();
};
var minusOne = function minusOne() {
    count--;
    renderTemplate();
};
var reset = function reset() {
    count = 0;
    renderTemplate();
};

// Root under which the JSX is rendered.
var appRoot = document.getElementById("app");

var renderTemplate = function renderTemplate() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { className: 'button', onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { className: 'button', onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { className: 'button', onClick: reset },
            'Reset'
        )
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderTemplate();
