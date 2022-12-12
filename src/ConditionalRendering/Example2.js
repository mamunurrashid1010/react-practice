import React, { Component } from "react";

class Example2 extends Component{
    constructor(){
        super();
        this.state={
            login:true,
        }
    }

    render(){
        // conditional return
        return(
            this.state.login==true?
            (<p>You are login</p>)
            :
            (<p>You are log-out</p>)
        )
    }
}
export default Example2;