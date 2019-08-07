import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { searchReducer } from './redux/reducer';

import Banner from './components/Banner';
import SearchComponent from './components/SearchComponent';

import './App.css';

const middleware = [logger, thunk];

const store = createStore(searchReducer, composeWithDevTools(applyMiddleware(...middleware)));

class App extends Component {
  componentWillMount() {
    document.title = 'Hacker News Search';
  }

  render() {
    return (
      <div className="app">
        <Banner title="Hacker News Search" author="Paul Leavitt" />
        <Provider store={store}>
          <SearchComponent />
        </Provider>
      </div>
    );
  }
}

export default App;
