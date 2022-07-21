import React from 'react';
import PropTypes from 'prop-types';
// import {
//   table, th, tbody, tr, th, td,
// } from 'react-bootstrap';

function tableComponent({ entries, visible }) {
  return (
    <table>
      <thead>
        <tr>
          {visible.index && <th>Index</th>}
          {visible.name && <th>Name</th>}
          {visible.link && <th>Link</th>}
          {visible.cors && <th>CORS</th>}
          {visible.description && <th>Description</th>}
          {visible.category && <th>Category</th>}
        </tr>
      </thead>
      <tbody>
        {entries.map((api, index) => (
        // eslint-disable-next-line react/no-array-index-key
          <tr key={index}>
            {visible.index && <td>{index + 1}</td>}
            {visible.name && <td>{api.API}</td>}
            {visible.link && <td>{api.Link}</td>}
            {visible.cors && <td>{api.Cors}</td>}
            {visible.description && <td>{api.Description}</td>}
            {visible.category && <td>{api.Category}</td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

tableComponent.propTypes = {
  entries: PropTypes.array.isRequired,
};

export default tableComponent;
