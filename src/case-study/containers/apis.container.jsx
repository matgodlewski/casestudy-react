import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  asyncFetchAllApisAction,
  updateDescriptionAction,
  deleteRowAction,
} from '../store/apis/apis.action';
import ApisComponent from '../component/apis.component';

function ApisContainer({
  apis,
  dispatch,
}) {
  const handleOnClick = () => {
    dispatch(asyncFetchAllApisAction());
  };

  const handleDescriptionChange = (id, description) => {
    dispatch(updateDescriptionAction(id, description));
  };

  const handleDeleteRow = (id) => {
    dispatch(deleteRowAction(id));
  };
  return (
    <div>
      <ApisComponent
        onClick={handleOnClick}
        apis={apis}
        handleDescriptionChange={handleDescriptionChange}
        handleDeleteRow={handleDeleteRow}
      />
    </div>
  );
}

ApisContainer.propTypes = {
  apis: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  apis: store.apis,
});

export default connect(mapStateToProps)(ApisContainer);
