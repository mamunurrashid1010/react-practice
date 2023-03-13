import React from 'react';

function PropsDestructuringInFunction ({title,description}) {
    const data = {'name':'Kamrul Hasan', 'designation':'IT Officer'};
    // destructuring
    const {name,designation} = data;
    return (
        <div>
            <p>Props Destructing Example</p>
            <p>
                Title : {title}
                Description : {description}
            </p>
            <div>
                <p>Officer Info :</p>
                <p>Name : {name}</p>
                <p>Designation : {designation}</p>
            </div>

        </div>
    );
}

export default PropsDestructuringInFunction;