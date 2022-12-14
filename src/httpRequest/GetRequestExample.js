import React, { Component } from 'react';
import axios from 'axios';

class GetRequestExample extends Component {

    constructor(){
        super();
        this.state={
            countries:[],
        }
    }

    componentDidCatch(){
        // get country list
        axios.get('https://restcountries.com/v3.1/all')
        .then(response=>{
            this.setState({countries:response.data})
        })
        .catch(error=>{
            console.log(error);
        })
    }

    render() {
        //var countryList=this.state.countries;
        var countryList=[{name:'bangladesh'},{name:'india'},{name:'nepal'}];
        var countryName = countryList.map((data)=>{
            return <li>{data.name}</li>
        })
        return (
            <div>
                <ul>{countryName}</ul>
            </div>
        );
    }
}

export default GetRequestExample;