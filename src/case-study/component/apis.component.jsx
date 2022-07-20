import React from 'react';
import PropTypes from 'prop-types';
import TableComponent from './table.component';

function ApisComponent({ onClick, apis }) {
  return (
    <div>
      <button onClick={onClick} type='button'>Get all apis</button>
      {apis.lastResponse && TableComponent({ entries: apis.lastResponse.entries })}
    </div>
  );
}

ApisComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  apis: PropTypes.object.isRequired,
};

export default ApisComponent;
