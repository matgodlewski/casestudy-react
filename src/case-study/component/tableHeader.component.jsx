// noinspection JSValidateTypes

import React from 'react';
import PropTypes from 'prop-types';
import {
  TableHead,
  TableRow,
  TableCell,

} from '@material-ui/core';

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

export default function TableHeaderComponent({
  hiddenColumnsIds,
}) {
  return (
    <TableHead>
      <TableRow
        style={{
          hover: 'none',
          backgroundColor: '#f5f5f5',
        }}
      >
        {entryFields.map((field) => (
          <th
            key={field.id}
            hidden={hiddenColumnsIds.includes(field.id)}
          >
            {field.label}
          </th>
        ))}
      </TableRow>
    </TableHead>
  );
}

TableHeaderComponent.propTypes = {
  hiddenColumnsIds: PropTypes.arrayOf(PropTypes.number).isRequired,
};
