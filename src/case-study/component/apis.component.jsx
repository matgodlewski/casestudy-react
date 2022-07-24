// noinspection JSValidateTypes

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import useLocalStorage from '../hooks/useLocalStorage';
import TableComponent from './table.component';
import FilterColumnsComponent from './filterTable.component';

function ApisComponent({
  onClick,
  apisDetails,
  dispatch = [],
}) {
  const { allApisInDevsCategory } = apisDetails;
  // save the hidden columns in local storage
  const [hiddenColumnsIds, setHiddenColumnsIds] = useLocalStorage(
    'hiddenColumnsIds',
    [],
  );
  return (
    <div>
      <Button
        onClick={onClick}
        type='button'
        variant='contained'
      >
        Get all apis
      </Button>
      <FilterColumnsComponent
        onColumnsChange={setHiddenColumnsIds}
        hiddenColumnsIds={hiddenColumnsIds}
      />
      {allApisInDevsCategory.length > 0 && (
        <TableComponent
          data={apisDetails.allApisInDevsCategory}
          hiddenColumnsIds={hiddenColumnsIds}
          dispatch={dispatch}
        />
      )}
    </div>
  );
}

ApisComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  apisDetails: PropTypes.shape({
    allApisInDevsCategory: PropTypes.arrayOf(PropTypes.shape({
      API: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      Auth: PropTypes.string.isRequired,
      HTTPS: PropTypes.bool.isRequired,
      Cors: PropTypes.string.isRequired,
      Link: PropTypes.string.isRequired,
      Category: PropTypes.string.isRequired,
    })),
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default ApisComponent;
