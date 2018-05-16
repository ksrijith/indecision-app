console.log("This is from app.js");

// JSX
var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer'
}
var template = (
    <div>
        <h1>{ app.title }</h1>
        <p>{ app.subtitle }</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var user = {
    name: 'Srijith Kartha',
    age: 35,
    location: 'Bengaluru'
};

function getLocation(location) {
    if ( location ) {
        return location;
    }
    return 'Unknown';
}
var templateTwo = (
    <div>
        <h1>{ user.name }</h1>
        <p>Age: { user.age }</p>
        <p>Location: { getLocation(user.location) }</p>
    </div>
);

// Root under which the JSX is rendered.
var app = document.getElementById("app");
ReactDOM.render(templateTwo, app);