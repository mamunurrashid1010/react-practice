import React, { Component } from "react";

class ButtonInClass extends Component{

    // button click handler
     buttonClickHandler(){
        alert('Hello...');
    }
    // button with argument
     buttonWithArgumentClickHandler(a){
        alert(a);
    }

    render(){
        return(
            <div>
                <button onClick={this.buttonClickHandler}>Click Me</button>
                {/* button with argument */}
                <button onClick={this.buttonWithArgumentClickHandler.bind(this,"test argument")}>Click Me (Aegument)</button>
            </div>
        );
    }
}
export default ButtonInClass;