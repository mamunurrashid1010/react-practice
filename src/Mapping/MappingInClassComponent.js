import React, {Component} from 'react';

class MappingInClassComponent extends Component {

    data = [
        {title : "title-1", desc : "desc-1"} ,
        {title : "title-2", desc : "desc-2"} ,
        {title : "title-3", desc : "desc-3"}
    ];

    render() {
        const dataView = this.data.map((d,i)=>{
            return (
                <li>
                    # {i}
                    Title : {d.title}
                    Description : {d.desc}
                </li>
            );
        });
        return (
            <div>
                <ul> {dataView} </ul>
            </div>
        );
    }
}

export default MappingInClassComponent;