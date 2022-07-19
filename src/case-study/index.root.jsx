import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ApisContainer from './containers/apis.container';
import storeApp from './store/storeApp';

const root = document.getElementById('root');
ReactDOM.render(
  <Provider store={storeApp}>
    <ApisContainer />
  </Provider>,
  root,
);
