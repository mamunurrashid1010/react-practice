import React, { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class ButtonBootstrap extends Component{
    render(){
        return(
            <div>
                {/* bootstrap button class use */}
                <button className="btn btn-primary btn-sm">bootstrap button example</button>
            </div>
        );
    }
}
export default ButtonBootstrap;