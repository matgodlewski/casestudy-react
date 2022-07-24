import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line import/prefer-default-export
export const entryFields = [
  {
    id: 0,
    label: 'Index',
  },
  {
    id: 1,
    label: 'API',
  },
  {
    id: 2,
    label: 'Link',
  },
  {
    id: 3,
    label: 'Cors',
  },
  {
    id: 4,
    label: 'Description',
  },
  {
    id: 5,
    label: 'Category',
  },
  {
    id: 6,
    label: 'Action',
  },
];

function TableHeaderComponent({
  hiddenColumnsIds,
}) {
  return (
    <thead>
      <tr>
        {entryFields.map((entry) => (
          <th
            key={entry.id}
            hidden={hiddenColumnsIds.some((id) => id === entry.id)}
          >
            {entry.label}
          </th>
        ))}
      </tr>
    </thead>
  );
}

TableHeaderComponent.propTypes = {
  hiddenColumnsIds: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default TableHeaderComponent;
