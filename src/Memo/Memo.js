import React, {useState} from 'react';
import Child from "./Child";

const Memo = () => {
    const [count,setCount] = useState(0);
    return (
        <div>
            <p>Memo</p>
            {/*# Memo use for not render unnecessary component.*/}
            {/*# when we want child component render only first time, here we can use memo function.*/}
            {console.log('memo parent compoenent')}
            <p>{count}</p>
            <button onClick={()=>{setCount((count)=>count+1)}}>Increment</button>
            <Child/>
        </div>
    );
};

export default Memo;