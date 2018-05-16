console.log("This is from app.js");

// JSX
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}
const onSubmitForm = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if ( option ) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderTemplate();
    }
};

const onRemoveAll = ()=> {
    app.options = [];
    renderTemplate();
}

// Root under which the JSX is rendered.
const appRoot = document.getElementById("app");

const renderTemplate = () => {
    const template = (
        <div>
            <h1>{ app.title }</h1>
            { app.subtitle && <p>{ app.subtitle }</p> }
            <p>{ app.options && app.options.length > 0?'Here are your options':'No options' }</p>
            <p>{ app.options.length }</p>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                <li>Item one</li>
                <li>Item two</li>
            </ol>

            <form onSubmit={onSubmitForm}>
                <input type="text" name="option" />
                <button type="submit">Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderTemplate();