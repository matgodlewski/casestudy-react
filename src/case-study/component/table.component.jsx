import React from 'react';
import PropTypes from 'prop-types';
// import {
//   table, th, tbody, tr, th, td,
// } from 'react-bootstrap';

function tableComponent({ entries }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Index</th>
          <th>Name</th>
          <th>Link</th>
          <th>CORS</th>
          <th>Description</th>
          <th>Category</th>
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
