import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }

    handleAddOption = (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value.trim(); // trim deletes leading and ending blank spaces
        const error =  this.props.handleAddOption(option); // only get a return value if there's an error... if not, just does handleAddOption
    
        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.option.value = ''; //clear data if no error in box
        }
    };

    render() {
        return (
            <div> 
                {this.state.error && <p className='add-option-error'>{this.state.error} </p>}
                <form className='add-option' onSubmit={this.handleAddOption}>
                    <input className='add-option__input' type="text" name="option" />
                    <button className='button'>Add Option</button>
                </form>
            </div>
        );
    }
}

