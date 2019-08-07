/* eslint-disable react/no-unknown-property */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Search from '@material-ui/icons/Search';
import { fetchResults } from '../redux/actions';
import './SearchInput.css';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      newQuery: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      query: event.target.value,
      newQuery: true,
    });
  }

  handleSubmit(event) {
    const { query } = this.state;
    const { fetchResults } = this.props;
    event.preventDefault();
    if (query !== '') {
      fetchResults(query);
    }
  }

  render() {
    const { query } = this.state;

    return (
      <div className="searchField">
        <form onSubmit={this.handleSubmit}>
          <div className="relative text-gray-600">
            <input
              value={query}
              margin="normal"
              onChange={this.handleChange}
              type="search"
              className="bg-purple-white shadow rounded border-0 p-3"
              placeholder="Search by name..."
            />{' '}
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
              <Search onClick={this.handleSubmit} />
            </button>
          </div>{' '}
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchResults,
    },
    dispatch
  );

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInput);
