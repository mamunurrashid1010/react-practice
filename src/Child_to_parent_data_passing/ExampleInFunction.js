/*
    Child to Parent Data Passing Example
*/
import React, {useState} from 'react';
import Child from "./Child";

const ExampleInFunction = () => {
    const {title,SetTitle} = useState();

    const getChildData = (data) =>{
        console.log(data);
    }

    return (
        <div>
            <p>Parent Component</p>
            <Child onHandle={getChildData} />
        </div>
    );
};

export default ExampleInFunction;