import React, { Component } from "react";

class Example1 extends Component{
    constructor(){
        super();
        this.state={
            login:true,
        }
    }

    render(){
        // conditional return
        if(this.state.login==true){
            return(<p>You are login</p>);
        }
        else{
            return(<p>You are log-out</p>);
        }

    }
}
export default Example1;