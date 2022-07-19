import React from 'react';
import PropTypes from "prop-types";

class ApisComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <button onClick={ () => this.props.onClick() }>Get all apis</button>
      </div>
    );
  }

}

ApisComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  apis: PropTypes.object.isRequired,
};

export default ApisComponent;
