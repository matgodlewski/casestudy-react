import React from 'react';
import { asyncFetchAllApisAction } from "../store/apis/apis.action";
import { connect } from "react-redux";
import ApisComponent from "../component/apis.component";

//Main difference between React.PureComponent and React.Component is fact
//that PureComponent has default implementation for shouldComponentUpdate method which uses shallow comparision between new props,state and old props, state values.
@connect(store => ({
  apis: store.apis,
}))
export default class ApisContainer extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  handleOnClick() {
    this.props.dispatch(asyncFetchAllApisAction());
  }

  render() {
    return (
      <div>
        <ApisComponent
            onClick={ () => this.handleOnClick() }
            apis={ this.props.apis }
        />
      </div>
    );
  }
}


// const mapStateToProps = store => ({
//   apis: store.apis,
// });
//
// export default connect(mapStateToProps)(InternshipProjectContainer);
