import React, {useState} from 'react';
import Child from "./Child";

const Parent = () => {
    const [data,setData] = useState({
        name: "Imran",
        id: 101,
        address:"test address"
    });
    const [company,setCompany] = useState();

    return (
        <div>
            <Child childData={data} org={company} />
        </div>
    );
};

export default Parent;