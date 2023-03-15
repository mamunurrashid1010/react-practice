import React from 'react';
import PropTypes from 'prop-types';

const Child = props => {
    return (
        <div>
            <h5>{props.childData.name}</h5>
            <p>{props.childData.id}</p>
            <p>{props.childData.address}</p>
            <h5>{props.org}</h5>
        </div>
    );
};

Child.propTypes = {
    childData:PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.number,
        address: PropTypes.string,
    }),
};

Child.defaultProps = {
    org: "Default Company",
};

export default Child;