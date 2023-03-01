import React from 'react';

const MappingInFunctionalComponent = () => {

    const data = [
        {title : "title-1", desc : "desc-1"} ,
        {title : "title-2", desc : "desc-2"} ,
        {title : "title-3", desc : "desc-3"}
    ];

    return (
        <div>
            {data.map((item,index)=>{
                return (
                    <div>
                        <p>Index : {index}</p>
                        <p>Title : {item.title}</p>
                        <p>Description : {item.desc}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default MappingInFunctionalComponent;