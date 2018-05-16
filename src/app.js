console.log("This is from app.js");

// JSX
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: [
        'Item One',
        'Item Two'
    ]
}
const template = (
    <div>
        <h1>{ app.title }</h1>
        { app.subtitle && <p>{ app.subtitle }</p> }
        <p>{ app.options && app.options.length > 0?'Here are your options':'No options' }</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

const user = {
    name: 'Srijith Kartha',
    age: 35,
    location: 'Bengaluru'
};

function getLocation(location) {
    if ( location ) {
        return <p>Location: { location }</p>;
    }
}
const templateTwo = (
    <div>
        <h1>{ user.name ? user.name : 'Anonymous' }</h1>
        { user.age && user.age >= 18 && <p>Age: { user.age }</p> }
        { getLocation(user.location) }
    </div>
);

// Root under which the JSX is rendered.
const appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);