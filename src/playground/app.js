class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        };
    }

    componentDidMount() {
        try { // try catch statement in case of invalid input / data
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options}));
            }
        } catch (e) {
            // Do nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('Component will unmount');
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) =>optionToRemove !== option)  // filter returns array with just those items... return if it's not the option (aka return everything except the option to delete)
        }));
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option) {
        if (!option) { // if option is empty
            return 'Enter a valid, non-empty value to add an item.';
        } else if (this.state.options.indexOf(option) > -1) { // index would only be > -1 if it was in array
            return 'This option already exists.'; 
        } 

        this.setState((prevState) => ({ options: prevState.options.concat(option)}));
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer.';

        return (
            <div> 
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div> 
            <h1>{props.title} </h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div> 
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length === 0 && <p> Please add an option to get started! </p>}
            {
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption} 
                    />
                ))
            }
        </div>
    );
};

const Option = (props) => {
    return (
        <div> 
            Option: {props.optionText}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                Remove
            </button>
        </div>
    );
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined // default = no error... if error, state is updated
        }
    }

    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim(); // trim deletes leading and ending blank spaces
        const error =  this.props.handleAddOption(option); // only get a return value if there's an error... if not, just does handleAddOption
    
        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.option.value = ''; //clear data if no error in box
        }
    }

    render() {
        return (
            <div> 
                {this.state.error && <p>{this.state.error} </p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp options={['nanxi', 'eric', 'woo']}/>, document.getElementById('app'));