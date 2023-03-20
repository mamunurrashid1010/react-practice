import React, {Component} from 'react';

// Mounting = constructor -> render -> componentDidMount
// Updating = state/props -> render -> componentDidUpdate
// Unmounting

class LifeCycleExample extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0,
        }
        console.log('Constructor')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        return true;
    }

    render() {
        {console.log('Render')}
        return (
            <div>
                <h4>Count : {this.state.count}</h4>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}> + </button>
            </div>
        );
    }
}

export default LifeCycleExample;