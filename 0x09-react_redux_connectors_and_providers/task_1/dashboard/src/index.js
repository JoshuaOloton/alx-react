import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { configureStore } from 'redux';
import uiReducer, { initialState } from './reducers/uiReducer';
import { Map } from 'immutable';

const store = configureStore(uiReducer, Map(initialState));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
