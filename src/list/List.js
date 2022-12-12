import React, { Component } from 'react';

class List extends Component {
    
    render() {
        const contries=['bangladesh','india','pakistan','usa'];
        var contriesData = contries.map((data)=>{
            return <li>{data}</li>
        });
        return (
            <div>
                <ol>
                    {contriesData}
                </ol>
            </div>
        );
    }
}

export default List;