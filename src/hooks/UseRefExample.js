import React, {useRef} from 'react';

const UseRefExample = () => {
    const nameRef = useRef();
    const phoneRef = useRef();

    const formSubmitHandler = (event) =>{
        event.preventDefault();
        console.log(nameRef.current.value);
    }

    return (
        <div>
            <h5>Ref example in functional component</h5>
                <form onSubmit={formSubmitHandler}>
                    <label for="name">Name </label>
                    <input type="text" name="name" id="name" ref={nameRef} /><br/>

                    <label for="phone">Phone </label>
                    <input type="text" name="phone" id="phone" ref={phoneRef} /><br/>

                    <button type="submit"> Submit </button>
                </form>
        </div>
    );
};

export default UseRefExample;