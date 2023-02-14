import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Component3 = () => {
    const {user, text} = useContext(UserContext);
    return (
        <div>
            <p>ID : {user.id}</p>
            <p>NAME : {user.name}</p>
            <p>TEXT : {text}</p>
        </div>
    );
};

export default Component3;