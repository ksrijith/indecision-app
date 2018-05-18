let clicked = false;
const detailsTemplate = <p>Hey, These are some details you can now see!</p>;
const toggleVisibility = () => {
    clicked = !clicked;
    renderTemplate();
};

// Root under which the JSX is rendered.
const appRoot = document.getElementById("app");

const renderTemplate = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={ toggleVisibility }>
                { clicked?"Hide Details":"Show Details"}
            </button>
            {
                clicked && detailsTemplate
            }
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderTemplate();