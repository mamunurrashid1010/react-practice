import {React,useState} from 'react';

const UseStateExample = () => {
    const [name,setName] = useState("Mamun");
    const [designation,setDesignation] = useState("Software Engineer");

    function changeValue(){
        setName("Hasan");
        setDesignation("IT Engineer");
    }

    return (
        <div>
            <h4>useState Example:</h4>
            <p>Name : {name}</p>
            <p>Designation: {designation}</p>
            <button onClick={changeValue}>Click for change</button>
        </div>
    );
};

export default UseStateExample;