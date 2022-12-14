import React, { Component } from 'react';
import axios from 'axios';

class PostRequestExample extends Component {

    constructor(){
        super();
        this.state={
                fullName:'',
                mobile:'',
                postResult:'',
        }
    }

    inputOnChnageHandler=(event)=>{
        var inputName = event.target.name;
        var inputValue = event.target.value;
        this.setState({[inputName]:inputValue});
    }

    formSubmitHandler=()=>{
        alert(this.state.fullName);
        // post data
        axios.post('https://beBangla/postInfo',this.state.fullName)
        .then(response=>{
            this.setState({postResult:response.data});
            alert(response.data);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.formSubmitHandler}>
                <input name="fullName" type="text" placeholder="Enter your name" onChange={this.inputOnChnageHandler}></input><br></br>
                    <input name="mobile" type="text" placeholder="Mobile No" onChange={this.inputOnChnageHandler}></input><br></br>
                    <input type="submit" value="Registration Now"></input>
                </form>
                
            </div>
        );
    }
}

export default PostRequestExample;