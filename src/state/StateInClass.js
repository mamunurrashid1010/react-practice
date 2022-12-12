import React, { Component } from "react";

class StateInClass extends Component{

    constructor(){
        super();
        this.state={
            name:'Mamunur Rashid',
            designation:'Software Engineer',
            height:['10','20','30'],
            weight:{
                cat1:50,
                cat2:60,
            }
        }
    }

    // set state example
    changeValue=()=>{
        this.setState({name:'Kamal',designation:'Accountant'});
    }

    render(){
        return(
            <div>
                <p>Name: {this.state.name}</p>
                <p>Designation: {this.state.designation}</p>
                <p>Height: {this.state.height[2]}</p>
                <p>Weight: {this.state.weight.cat2}</p>
                <button onClick={this.changeValue}>Click for change</button>
            </div>
        );
    }
}
export default StateInClass;