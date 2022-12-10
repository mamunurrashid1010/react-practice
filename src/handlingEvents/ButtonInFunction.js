import React from "react";

function ButtonInFunction(){
    
    // button click handler
    function buttonClickHandler(){
        alert('Hello...');
    }
    // button with argument
    function buttonWithArgumentClickHandler(a){
        alert(a);
    }

    return(
        <div>
            <button onClick={buttonClickHandler}>Click Me</button>

            {/* button with argument */}
            <button onClick={buttonWithArgumentClickHandler.bind(this,"test argument")}>Click Me (Aegument)</button>
        </div>
    );
}
export default ButtonInFunction;