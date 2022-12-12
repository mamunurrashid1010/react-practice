import React, { Component } from 'react';

class DropdownList extends Component {
    render() {
        var contries=[
            { name:'bangladesh', zipcode:1000 },
            { name:'india', zipcode:2000 },
            { name:'japan', zipcode:3000 }
        ];

        var countriesData=contries.map((data)=>{
            return <option value={data.name}>{data.name} ({data.zipcode})</option>
        });

        return (
            <div>
                <select>
                    {countriesData}
                </select>
            </div>
        );
    }
}

export default DropdownList;