
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