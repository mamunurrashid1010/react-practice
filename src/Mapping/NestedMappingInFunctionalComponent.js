import React from 'react';

const NestedMappingInFunctionalComponent = () => {
    const data = [
        {
            name : "name-1", designation : "d-1",
            phone : [
                {office : "01812", home : "0171"}
            ]
        } ,
        {
            name : "name-2", designation : "d-2",
            phone : [
                {office : "001812", home : "00171"}
            ]
        } ,
    ];
    return (
        <div>
            {data.map((item,index)=>{
                return (
                    <div>
                        <p>Index : {index}</p>
                        <p>Name : {item.name}</p>
                        <p>Designation : {item.designation}</p>
                        <p>
                            Phone :
                            <p>Office :{item.phone.office}</p>
                            <p>Home :{item.phone.home}</p>
                        </p>
                    </div>
                )
            })}
        </div>
    );
};

export default NestedMappingInFunctionalComponent;