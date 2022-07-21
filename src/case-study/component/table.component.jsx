import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  TextareaAutosize,
} from '@material-ui/core';

function tableComponent({
  entries,
  visible,
  // handleDescriptionChange,
  handleDeleteRow,
}) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {visible.index && <TableCell>Index</TableCell>}
          {visible.name && <TableCell>Name</TableCell>}
          {visible.link && <TableCell>Link</TableCell>}
          {visible.cors && <TableCell>CORS</TableCell>}
          {visible.description && <TableCell>Description</TableCell>}
          {visible.category && <TableCell>Category</TableCell>}
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {entries.map((api, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <TableRow key={index}>
            {visible.index && <TableCell>{index + 1}</TableCell>}
            {visible.name && <TableCell>{api.API}</TableCell>}
            {visible.link && <TableCell>{api.Link}</TableCell>}
            {visible.cors && <TableCell>{api.Cors}</TableCell>}

            {visible.description && (
              <TableCell>
                <TextareaAutosize
                  value={api.Description}
                  readOnly
                />
              </TableCell>
            )}
            {visible.category && <td>{api.Category}</td>}
            <TableCell>
              <Button onClick={() => handleDeleteRow(index)} type='button'>
                Delete
              </Button>
              <Button // onClick={() => handleDescriptionChange(index, api.Description)}
                type='button'
              >
                Save
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

tableComponent.propTypes = {
  entries: PropTypes.array.isRequired,
  visible: PropTypes.object.isRequired,
  handleDescriptionChange: PropTypes.func.isRequired,
  handleDeleteRow: PropTypes.func.isRequired,
};

export default tableComponent;
