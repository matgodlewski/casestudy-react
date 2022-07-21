import React from 'react';
import PropTypes from 'prop-types';
import useLocalStorage from '../hooks/useLocalStorage';
import TableComponent from './table.component';
import FilterTableComponent from './filterTable.component';

function ApisComponent({ onClick, apis }) {
  const [visible, setVisible] = useLocalStorage('columns', {
    index: true,
    name: true,
    link: true,
    cors: true,
    description: true,
    category: true,
  });

  return (
    <div>
      <button onClick={onClick} type='button'>Get all apis</button>
      {apis.lastResponse && FilterTableComponent(visible, setVisible)}
      {apis.lastResponse && TableComponent({ entries: apis.lastResponse.entries, visible })}
    </div>
  );
}

ApisComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  apis: PropTypes.object.isRequired,
};

export default ApisComponent;
