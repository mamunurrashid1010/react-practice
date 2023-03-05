import React, {useState} from 'react';

const ExampleInFunctionalComponent = () => {
    const [auth,SetAuth] = useState(true);

    if(auth == true)
        return (
            <div>
                <p>Auth true</p>
            </div>
        );
    else
        return (
            <div>
                <p>Auth false</p>
            </div>
        );
};

export default ExampleInFunctionalComponent;