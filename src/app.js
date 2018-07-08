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
const userName = 'Nanxi Liu!';
const user = {
    name: 'Nanxi',
    age: '20',
    location: 'Seattle'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location} </p>;
    }
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {/* <p>Age: {user.age} </p> */}
        {(user.age && user.age >= 18) && <p>Age: {user.age} </p>}
        {/* <p>Location: {getLocation(user.location)} </p> */}
        {getLocation(user.location)}
    </div>
);
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);