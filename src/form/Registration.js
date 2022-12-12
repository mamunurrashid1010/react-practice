import React, { Component } from "react";

class Registration extends Component{

    constructor(){
        super();
        this.state={
                fullName:'',
                mobile:'',
                email:'',
                note:'',
                gender:'',
        }
    }

    // get form data
    inputOnChnageHandler=(event)=>{
        var inputName = event.target.name;
        var inputValue = event.target.value;
        this.setState({[inputName]:inputValue});

        // validation
        // name validation
        if(inputName === 'fullName'){
            var namePattern = /^[a-zA-Z ]{2,30}$/;
            if(!namePattern.test(inputValue)){
                this.setState({fullName:"Name is not valid"});
            }
        }
        // mobile validation
        if(inputName === 'mobile'){
            if(!Number(inputValue)){
                this.setState({mobile:"Mobile is not valid"});
            }
        }
        // email validation
        if(inputName === 'email'){
            var emailPattern = /^\S+@\S+\.\S+$/;
            if(!emailPattern.test(inputValue)){
                this.setState({email:"Email is not valid"});
            }
        }

    }

    // form submit
    formSubmitHandler=()=>{
        alert('Registration success');
    }
    

    render(){
        return(
            <div>
                <h4>Registration Form</h4>
                <p>Name: {this.state.fullName}</p>
                <p>Mobile: {this.state.mobile}</p>
                <p>Email: {this.state.email}</p>
                <p>Note: {this.state.note}</p>
                <p>Note: {this.state.gender}</p>

                <form onSubmit={this.formSubmitHandler}>
                    <input name="fullName" type="text" placeholder="Enter your name" onChange={this.inputOnChnageHandler}></input><br></br>
                    <input name="mobile" type="text" placeholder="Mobile No" onChange={this.inputOnChnageHandler}></input><br></br>
                    <input name="email" type="text" placeholder="example@mail.com" onChange={this.inputOnChnageHandler}></input><br></br>
                    <textarea name="note" onChange={this.inputOnChnageHandler}></textarea><br></br>
                    <select name="gender" onChange={this.inputOnChnageHandler}>
                        <option value="">Selete gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <br></br>
                    <input type="submit" value="Registration Now"></input>
                </form>
                

            </div>
        );
    }
}
export default Registration;