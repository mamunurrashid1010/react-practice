import React from 'react';

const Child = (props) => {

    const title = 'test child data';
    props.onHandle(title);

    return (
        <div>
            <p>Child Component</p>
        </div>
    );
};

export default Child;