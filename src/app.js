console.log("This is from app.js");

var template = (
    <div>
        <h1>This is from jsx file</h1>
        <p>this is some info</p>
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
ReactDOM.render(templateTwo, app);