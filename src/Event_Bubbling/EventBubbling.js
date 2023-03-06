import React from 'react';

const EventBubbling = () =>{

    // parent
    const handleParent = (event) =>{
        console.log('parent');
    }
    // child
    const handleChild = (event) =>{
        event.stopPropagation();
        console.log('child');
    }

    return (
      <div onClick={handleParent} style={{backgroundColor:"gray"}}>
            <p>Parent Div</p>
          <button onClick={handleChild}>Child</button>
      </div>
    );
}
export default EventBubbling;