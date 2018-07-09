import React from 'react';
import Action from './Action';
import AddOption from './AddOption';
import Header from './Header';
import Options from './Options';

// pull the state out of constructor
// convert all 4 event handlers to class properties (arrow functions)
// delete the constructor completely
// start with class properties and end with method


export default class IndecisionApp extends React.Component {
    state = {
        options: []
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) =>optionToRemove !== option)  // filter returns array with just those items... return if it's not the option (aka return everything except the option to delete)
        }));
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    };

    handleAddOption = (option) => {
        if (!option) { // if option is empty
            return 'Enter a valid, non-empty value to add an item.';
        } else if (this.state.options.indexOf(option) > -1) { // index would only be > -1 if it was in array
            return 'This option already exists.'; 
        } 

        this.setState((prevState) => ({ options: prevState.options.concat(option)}));
    };

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