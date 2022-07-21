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
          <tr key={index + 1}>
            <td>{index}</td>
            <td>{api.API}</td>
            <td>{api.Link}</td>
            <td>{api.Cors}</td>
            <td>{api.Description}</td>
            <td>{api.Category}</td>
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
