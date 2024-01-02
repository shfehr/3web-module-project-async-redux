import React from 'react';
import ReactDOM from 'react-dom';

import { applyMiddleware, legacy_createStore } from 'redux';
import { Provider } from 'react-redux'
import {thunk} from 'redux-thunk';


import App from './App';
import './index.css';

import reducer from './reducer'


const store = legacy_createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,  
  document.getElementById('root')
);
