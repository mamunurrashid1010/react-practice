import React,{memo} from 'react';

const Child = () => {
    return (
        <div>
            <p>I'm from child component</p>
            {console.log('memo child compoenent')}
        </div>
    );
};

export default memo(Child);