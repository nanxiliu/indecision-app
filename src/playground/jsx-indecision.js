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
        render();
    }
}

const onRemoveAll = () => {
    app.options = [];
    render();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div> 
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options:' : 'No options available!'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick = {onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

render();console.log("HELLO!");

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
        render();
    }
}

const onRemoveAll = () => {
    app.options = [];
    render();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div> 
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options:' : 'No options available!'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick = {onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

render();