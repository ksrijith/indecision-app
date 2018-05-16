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

var app = document.getElementById("app");

var templateTwo = (
    <div>
        <h1>Srijith Kartha</h1>
        <p>Age: 35</p>
        <p>Location: Bengaluru</p>
    </div>
);

ReactDOM.render(templateTwo, app);