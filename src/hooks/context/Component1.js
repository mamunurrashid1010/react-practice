import React,{useState} from 'react';
import Component2 from './Component2';
import { UserContext } from './UserContext';

const Component1 = () => {

    const [user, setUser] = useState({id:11,name:"Mamun"});
    const [text, setText] = useState("demo text");

    return (
        <UserContext.Provider value={{user, text}}>
            <Component2/>
        </UserContext.Provider>
    );
};

export default Component1;