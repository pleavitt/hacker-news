import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import App from './App';
import { searchReducer } from './redux/reducer';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto';

const store = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={store(searchReducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
