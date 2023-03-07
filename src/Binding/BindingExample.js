import React, {Component} from 'react';

class BindingExample extends Component {
    constructor(){
        super();
        this.state={
            count : 0,
        }
        this.Increment = this.Increment.bind(this);
        this.Decrement = this.Decrement.bind(this);
    }

    // increment
    Increment (){
        this.setState({count : this.state.count+1})
    }
    // Decrement
    Decrement (){
        this.setState({count : this.state.count-1})
    }
    render() {
        return (
            <div>
                <h3>{this.state.count}</h3>
                <button onClick={this.Increment}>Increment</button>
                <button onClick={this.Decrement}>Decrement</button>
            </div>
        );
    }
}

export default BindingExample;