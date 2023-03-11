import React,{Fragment} from 'react';

const Child = () => {
    return (
        <Fragment>
            <p>Child component</p>
            <>
                <p>Child data</p>
            </>
        </Fragment>
    );
};

export default Child;