import React from 'react';
import PropTypes from 'prop-types';

function ApisComponent({ onClick, apis }) {
  return (
    <div>
      <button onClick={onClick} type='button'>Get all apis</button>
      {apis.lastResponse && (
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
            {apis.lastResponse.entries.map((api, index) => (
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
      )}
    </div>
  );
}

ApisComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  apis: PropTypes.object.isRequired,
};

export default ApisComponent;
