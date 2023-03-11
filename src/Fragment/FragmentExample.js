import React, {Fragment} from 'react';
import Child from "./Child";

const FragmentExample = () => {
    return (
        <div>
            <p>Parent Component</p>
            <Fragment>
                <Child/>
            </Fragment>
        </div>
    );
};

export default FragmentExample;