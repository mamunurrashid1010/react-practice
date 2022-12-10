import React from "react";

function PropsInFunction(props){
    return(
        <div>
            <h5>I'm from functional component.</h5>
            <p>Name: {props.name}</p>
            <p>Designation: {props.designation}</p>
        </div>
    );
}
export default PropsInFunction;