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

let count = 0;
const addOne = () => {
    count++;
    renderTemplate();
}
const minusOne = () => {
    count--;
    renderTemplate();
}
const reset = () => {
    count=0;
    renderTemplate();
}

// Root under which the JSX is rendered.
const appRoot = document.getElementById("app");

const renderTemplate = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button className="button" onClick={ addOne }>+1</button>
            <button className="button" onClick={ minusOne }>-1</button>
            <button className="button" onClick={ reset }>Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);

};

renderTemplate();