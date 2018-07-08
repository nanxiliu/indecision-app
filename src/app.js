console.log("HELLO!");

const app = {
    title: 'Indecision App',
    subtitle: 'A way to decide what to choose!',
    options: ['One', 'two'],
};

const template = (
    <div> 
        <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options:' : 'No options available!'}</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
    </div>
);

let count = 0;
const addOne = () => {
    console.log('addOne')
};

// Challenge
// Make button "-1" setup minusOne function and register - log "minusOne"
// Make reset button "reset" - setup reset function - log "reset"

const minusOne = () => {
    console.log('minusOne')
};

const reset = () => {
    console.log('reset')
}

const templateTwo = (
    <div>
        <h1>Count: {count} </h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>Reset</button>
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);