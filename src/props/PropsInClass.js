import React, { Component } from "react";

class PropsInClass extends Component{
    render(){
        return(
            <div>
            <h5>I'm from class component.</h5>
            <p>Name: {this.props.name}</p>
            <p>Designation: {this.props.designation}</p>
        </div>
        );
    }
}
export default PropsInClass;