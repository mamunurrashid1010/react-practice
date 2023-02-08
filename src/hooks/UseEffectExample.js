import React, { useEffect, useState } from 'react';

const UseEffectExample = () => {
    // state
    const [count,setCount] = useState(0);
    const [test,setTest] = useState(false);

    // example-1 : use effect, when page load first time
    useEffect(()=>{
        setCount(5);
    },[])

    // example-2 : use effect, every time render
    // useEffect(()=>{
    //     setCount(5);
    // })

    // example-3 : use effect, when test value true
    // useEffect(()=>{
    //     setCount(5);
    // },[test])

    // increament count value
    const increment=()=>{
        setCount(count=>count+1);
    }
    
    // decrement count value
    const decrement=()=>{
        setCount(count=>count-1);
    }

    return (
        <div>
            <h4>useEffect example</h4>
            <h5>{count}</h5>
            <button onClick={increment}> + </button>
            <button onClick={decrement}> - </button>
            <br/>
            <button onClick={()=>setTest(true)}> test true </button>
        </div>
    );
};

export default UseEffectExample;