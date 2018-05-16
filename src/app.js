console.log("This is from app.js");

// JSX
var app = {
    title: 'This is the title',
    subtitle: 'This is subtitle'
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
}
var templateTwo = (
    <div>
        <h1>{ user.name }</h1>
        <p>Age: { user.age }</p>
        <p>Location: { user.location }</p>
    </div>
);

var app = document.getElementById("app");
ReactDOM.render(template, app);