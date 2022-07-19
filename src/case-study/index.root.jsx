import React from 'react';
import ReactDOM from 'react-dom';
import ApisContainer from './containers/apis.container';
import { Provider } from 'react-redux';
import storeApp from './store/storeApp';

const root = document.getElementById('root');
ReactDOM.render(<Provider store={storeApp}>
    <ApisContainer />
</Provider>, root);
