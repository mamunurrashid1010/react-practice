import React, { Component, createRef } from 'react';

class RefExampleInClass extends Component {
    constructor(){
        super();
        this.nameRef = createRef();
        this.phoneRef = createRef();
        this.state={}
    }

    formSubmitHandler = (event) => {
        event.preventDefault();
        console.log(this.nameRef.current.value);
        console.log(this.phoneRef.current.value);
    }

    render() {
        return (
            <div>
                <h5>Ref example in class component</h5>
                <form onSubmit={this.formSubmitHandler}>
                    <label for="name">Name </label>
                    <input type="text" name="name" id="name" ref={this.nameRef} /><br/>

                    <label for="phone">Phone </label>
                    <input type="text" name="phone" id="phone" ref={this.phoneRef} /><br/>

                    <button type="submit"> Submit </button>

                </form>
            </div>
        );
    }
}

export default RefExampleInClass;