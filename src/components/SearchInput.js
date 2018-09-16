import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

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
          <TextField
            id="search"
            label="Search"
            type="search"
            value={query}
            margin="normal"
            onChange={this.handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Search onClick={this.handleSubmit} />
                </InputAdornment>
              ),
            }}
          />
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
