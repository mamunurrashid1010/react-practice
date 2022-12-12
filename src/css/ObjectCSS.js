import React, { Component } from 'react';

class ObjectCSS extends Component {
    // css object
     textStyle={
        color:"white",
        backgroundColor:"red",
        fontSize:"20px"
    }
    render() {
        return (
            <div>
                <p style={this.textStyle}>Object CSS Example</p>
            </div>
        );
    }
}

export default ObjectCSS;