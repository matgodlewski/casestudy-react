import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { asyncFetchAllApisAction } from '../store/apis/apis.action';
import ApisComponent from '../component/apis.component';

function ApisContainer({
  apisDetails,
  dispatch,
}) {
  const handleOnClick = () => {
    dispatch(asyncFetchAllApisAction());
  };

  return (
    <div>
      <ApisComponent
        onClick={() => handleOnClick()}
        apisDetails={apisDetails}
        dispatch={dispatch}
      />
    </div>
  );
}

ApisContainer.propTypes = {
  apisDetails: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  apisDetails: store.apisDetails,
});

export default connect(mapStateToProps)(ApisContainer);
