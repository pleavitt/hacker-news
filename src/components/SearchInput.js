import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import Search from '@material-ui/icons/Search';
import { fetchResults } from '../redux/actions';
import './SearchInput.css';

class SearchInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      query: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      query: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.query !== '') {
      this.props.dispatch(fetchResults(this.state.query));
    }
  }

  render() {
    const { isFetching } = this.props;
    return (
      <div className="searchField">
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="search"
            label="Search"
            type="search"
            value={this.state.query}
            // className={classes.textField}
            margin="normal"
            onChange={this.handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </form>
        {isFetching && (
          <p className="loading">
            Loading
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </p>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(SearchInput);
