console.log("HELLO!");

const app = {
    title: 'Indecision App',
    subtitle: 'A way to decide what to choose!',
    options: [],
};

const onFormSubmit = (e) => { // e = event object, e contains various info about event
    e.preventDefault(); // stops full page refresh, lets us run code below

    const option = e.target.elements.option.value; // points to element that event starts on and gets value

    if (option) {
        app.options.push(option); // add option to options array
        e.target.elements.option.value = ''; // reset to blank
        renderOptions();
    }
}

const removeAll = () => {
    app.options = [];
    renderOptions();
}

const appRoot = document.getElementById('app');

const renderOptions = () => {
    const template = (
        <div> 
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options:' : 'No options available!'}</p>
            <p>{app.options.length}</p>
            <button onClick = {removeAll}>Remove All</button>
            <ol>
                <li>Item 1</li>
                <li>Item 2</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderOptions();