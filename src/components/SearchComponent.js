import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './SearchComponent.css';
import SearchInput from './SearchInput';
import PageNav from './PageNav';
import ResultList from './ResultList';

class SearchComponent extends Component {
  render() {
    const { results, error, isFetching, currentPage } = this.props;
    return (
      <div className="searchContainer">
        {error && (
          <div className="notification is-danger">
            <button type="button" className="delete" />
            {error}
          </div>
        )}

        <SearchInput />

        {results.length > 0 && currentPage > 0 && <ResultList results={results} />}

        <PageNav isFetching={isFetching} />
      </div>
    );
  }
}

SearchComponent.propTypes = {
  results: PropTypes.array.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  currentPage: PropTypes.number,
};

SearchComponent.defaultProps = {
  error: '',
  currentPage: 0,
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(SearchComponent);
