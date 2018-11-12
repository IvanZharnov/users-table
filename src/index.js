import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './resources/store';
import UsersTable from './components/Table/Table.component';
import * as serviceWorker from './serviceWorker';

serviceWorker.unregister();

const store = configureStore({});
const rootElement = document.getElementById('root'); //eslint-disable-line
 ReactDOM.render(
  <Provider store={store}>
    <UsersTable />
  </Provider>,
  rootElement,
);
