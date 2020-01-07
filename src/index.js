import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './GlobalStyles/main.scss'
import 'semantic-ui-css/semantic.min.css'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './Reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(thunk))(createStore);

    ReactDOM.render(
      <Provider store={createStoreWithMiddleware(reducers)}>
      <App/>
    </Provider>
    , document.getElementById('digiturk'))