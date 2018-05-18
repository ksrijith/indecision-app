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

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    alert(randomNum);
    const option = app.option[randomNum];
};

// Root under which the JSX is rendered.
const appRoot = document.getElementById("app");

const renderTemplate = () => {
    const template = (
        <div>
            <h1>{ app.title }</h1>
            { app.subtitle && <p>{ app.subtitle }</p> }
            <p>{ app.options && app.options.length > 0?'Here are your options':'No options' }</p>
            <button disabled={ app.options.length===0 } onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>

            <ol>
            {
                app.options.map((option, index) => <li key={ index }>{ option }</li>)
            }
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