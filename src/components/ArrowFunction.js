import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

 const ArrowFunction=()=>{

    const AlertBtn=()=>{
        alert('Test');
    }

    return(
        <div>
            <button className="btn btn-primary btn-sm" onClick={AlertBtn}>bootstrap button example</button>
        </div>
    );
}
export default ArrowFunction;