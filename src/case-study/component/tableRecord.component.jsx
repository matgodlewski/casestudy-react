import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

function TableRecordComponent({
  index,
  entry,
  hiddenColumnsIds,
  editApiEntry,
  removeApiEntry,
}) {
  const [description, setDescription] = React.useState(entry.Description);
  const [editMode, setEditMode] = React.useState(false);

  const onEditClick = (pickedEntry) => {
    if (editMode) {
      const newEntry = {
        ...pickedEntry,
        Description: description,
      };
      editApiEntry(newEntry);
    }
    setEditMode(!editMode);
  };

  useEffect(() => setDescription(entry.Description), [entry]);

  return (
    <tr>
      <td
        key='NO'
        hidden={hiddenColumnsIds.some((id) => id === 0)}
      >
        <strong>{index + 1}</strong>
      </td>
      <td
        key='API_NAME'
        hidden={hiddenColumnsIds.some((id) => id === 1)}
      >
        {entry.API}
      </td>
      <td
        key='LINK'
        hidden={hiddenColumnsIds.some((id) => id === 2)}
      >
        <a
          href={entry.Link}
          target='_blank'
          rel='noopener noreferrer'
        >
          {entry.Link}
        </a>
      </td>
      <td
        key='CORS'
        hidden={hiddenColumnsIds.some((id) => id === 3)}
      >
        {/* eslint-disable-next-line no-nested-ternary */}
        {entry.Cors === 'unknown' ? '❓' : entry.Cors === 'yes' ? '✅' : '❌'}
      </td>
      <td
        key='DESCRIPTION'
        hidden={hiddenColumnsIds.some((id) => id === 4)}
      >
        {editMode ? (
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        ) : (
          entry.Description
        )}
      </td>
      <td
        key='CATEGORY'
        hidden={hiddenColumnsIds.some((id) => id === 5)}
      >
        <strong>{entry.Category}</strong>
      </td>
      <td
        key='ACTION'
        hidden={hiddenColumnsIds.some((id) => id === 6)}
      >
        <Button
          type='button'
          onClick={() => onEditClick(entry)}
          variant='contained'
          color='primary'
        >
          {editMode ? 'Save' : 'Edit'}
        </Button>
        <Button
          type='button'
          onClick={() => removeApiEntry(entry.API)}
          confirm='Are you sure you want to delete this entry?'
          variant='contained'
          color='secondary'
        >
          Remove
        </Button>
      </td>
    </tr>
  );
}

export default TableRecordComponent;

TableRecordComponent.propTypes = {
  index: PropTypes.number.isRequired,
  entry: PropTypes.shape({
    API: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Auth: PropTypes.string.isRequired,
    HTTPS: PropTypes.bool.isRequired,
    Cors: PropTypes.string.isRequired,
    Link: PropTypes.string.isRequired,
    Category: PropTypes.string.isRequired,
  }).isRequired,
  hiddenColumnsIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  editApiEntry: PropTypes.func.isRequired,
  removeApiEntry: PropTypes.func.isRequired,
};
