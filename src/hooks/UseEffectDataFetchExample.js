import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UseEffectDataFetchExample = () => {
    const [data,setData] = useState(null);

    useEffect(()=>{

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            setData(res.data)
        })
        .catch(e=>{

        })

    })

    return (
        <div>
            <h4>Data fetch useEffect example</h4>
            <p>
                {
                    data && data.map((mydata)=>{
                        return <p> {mydata.title}</p>;
                    })
                }
            </p>
        </div>
    );
};

export default UseEffectDataFetchExample;