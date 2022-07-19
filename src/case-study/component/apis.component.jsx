import React from 'react';
import PropTypes from 'prop-types';

function ApisComponent({ onClick, apis }) {
  return (
    <div>
      <button onClick={onClick} type='button'>Get all apis</button>
    </div>
  );
}

ApisComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  apis: PropTypes.object.isRequired,
};

export default ApisComponent;
