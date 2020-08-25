import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import swDevelopment from './swDevelopment';
import swProduction from './swProduction';

const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
if (process.env.NODE_ENV === 'production') {
  swProduction();
} else if (process.env.NODE_ENV === 'development') {
  swDevelopment();
}
