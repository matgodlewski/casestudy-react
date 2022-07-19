import React from 'react';
import PropTypes from "prop-types";

const ApisComponent = ({ onClick, apis }) =>
    (
        <div>
            <button onClick={onClick}>Get all apis</button>
        </div>
    );

ApisComponent.propTypes = {
    onClick: PropTypes.func.isRequired,
    apis: PropTypes.object.isRequired,
};

export default ApisComponent;
