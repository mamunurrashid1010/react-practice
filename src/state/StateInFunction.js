import React, {useState} from 'react';

const StateInFunction = () => {
    const [name,setName] = useState("Mamun");
    const [designation,setDesignation] = useState("Software Engineer");

    function changeValue(){
        setName("Hasan");
        setDesignation("IT Engineer");
    }

    return (
        <div>
            <p>State in function component example:</p>
            <p>Name : {name}</p>
            <p>Designation: {designation}</p>
            <button onClick={changeValue}>Click for change</button>
        </div>
    );
};

export default StateInFunction;