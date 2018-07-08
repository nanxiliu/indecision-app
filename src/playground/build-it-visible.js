const app = {
    title: 'Visibility Toggle',
}

const appRoot = document.getElementById('app');

// My solution
// let detailsMessage = 'Show details';
// const details = 'Hey! Here are some details.'

// const onDetails = () => {
//     console.log('hi')
//     detailsMessage = detailsMessage === 'Show details' ? 'Hide details' : 'Show details';
//     details 
//     render();
// };

let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    render();
}

const render = () => {
    const template = (
        <div> 
            <h1>{app.title}</h1> 
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide details' : 'Show details'}
            </button>
            {visibility && (
                <div>
                <p>Hey. Here are some details you can now see! </p>
                </div>
            )}
            {/* My solution */}
            {/* <button onClick={onDetails}>{detailsMessage}</button>
            {detailsMessage === "Hide details" ? <p> {details} </p> : ''} */}
        </div>
        );
    ReactDOM.render(template, appRoot);
}

render();