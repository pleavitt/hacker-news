import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Banner from './components/Banner';
import './App.css';
import './sass/mystyles.scss';
import SearchInput from './components/SearchInput';
import PageNav from './components/PageNav';
import ResultList from './components/ResultList';

class App extends Component {
  componentWillMount() {
    document.title = 'Hacker News Search';
  }

  render() {
    const { results, error, isFetching } = this.props;
    return (
      <div className="app">
        <Banner title="Hacker News Search" author="Paul Leavitt" />
        <div className="searchContainer">
          {error && (
            <div className="notification is-danger">
              <button type="button" className="delete" />
              {error}
            </div>
          )}

          <SearchInput />

          {results.length > 0 && !isFetching && <ResultList results={results} />}

          {results.length > 0 && !isFetching && <PageNav />}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  results: PropTypes.array.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
