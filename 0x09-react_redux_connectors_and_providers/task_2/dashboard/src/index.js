import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore, applyMiddleware } from 'redux';
import App from './App/App';
import thunk from "redux-thunk";
import uiReducer, { initialState } from "./reducers/uiReducer";
import { Map } from "immutable";

const store = configureStore(uiReducer, Map(initialState), applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
