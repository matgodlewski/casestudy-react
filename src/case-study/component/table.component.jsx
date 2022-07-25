import React from 'react';
import PropTypes from 'prop-types';
import { updateApiDetailsEntries } from '../store/apis/apisDetails.action';
import TableRecordComponent from './tableRecord.component';
import TableHeaderComponent from './tableHeader.component';

export default function TableComponent({
  data,
  hiddenColumnsIds,
  dispatch,
}) {
  const onEntryEdit = (entry) => {
    const filteredData = data.filter((item) => item.API !== entry.API);
    filteredData.push(entry);
    dispatch(updateApiDetailsEntries(filteredData));
  };

  const onEntryDelete = (API) => {
    dispatch(updateApiDetailsEntries(data.filter((item) => item.API !== API)));
  };

  return (
    <table>
      <TableHeaderComponent
        hiddenColumnsIds={hiddenColumnsIds}
      />
      <tbody>
        {data.map((entry, index) => (
          <TableRecordComponent
            /* eslint-disable-next-line react/no-array-index-key */
            key={index}
            entry={entry}
            hiddenColumnsIds={hiddenColumnsIds}
            editApiEntry={onEntryEdit}
            removeApiEntry={onEntryDelete}
            index={index}
          />
        ))}
      </tbody>
    </table>

  );
}

TableComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    API: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Auth: PropTypes.string.isRequired,
    HTTPS: PropTypes.bool.isRequired,
    Cors: PropTypes.string.isRequired,
    Link: PropTypes.string.isRequired,
    Category: PropTypes.string.isRequired,
  })).isRequired,
  hiddenColumnsIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  dispatch: PropTypes.func.isRequired,
};
