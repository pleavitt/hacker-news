import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Banner from './components/Banner';
import './App.css';
import './sass/mystyles.scss';
import SearchInput from './components/SearchInput';
import PageNav from './components/PageNav';
import ResultList from './components/ResultList';
import SearchComponent from "./components/SearchComponent";

class App extends Component {
  componentWillMount() {
    document.title = 'Hacker News Search';
  }

  render() {
    return (
      <div className="app">
        <Banner title="Hacker News Search" author="Paul Leavitt" />
        <SearchComponent />
      </div>
    );
  }
}

export default App;
