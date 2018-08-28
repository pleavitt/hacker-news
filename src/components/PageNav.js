import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { fetchResults } from '../redux/actions';
import './PageNav.css';

class PageNav extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { query, currentPage, dispatch } = this.props;
    let nextPage;
    if (event.target.innerText.includes('MORE')) {
      nextPage = currentPage + 1;
    } else {
      nextPage = currentPage - 1;
    }

    dispatch(fetchResults(query, nextPage));
    event.preventDefault();
  }

  render() {
    const { currentPage, totalPages, results, isFetching } = this.props;
    let moreEndLoading;

    if (isFetching) {
      moreEndLoading = <div className="spinner" />;
    } else if (currentPage < totalPages) {
      moreEndLoading = (
        <Button variant="contained" color="primary" onClick={this.handleClick}>
          More
        </Button>
      );
    } else if (results.length > 0) {
      moreEndLoading = (
        <Button variant="contained" color="primary" disabled>
          End of results
        </Button>
      );
    }

    return <div className="pageNav">{moreEndLoading}</div>;
  }
}

PageNav.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  query: PropTypes.string,
  results: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

PageNav.defaultProps = {
  currentPage: 0,
  totalPages: 0,
  query: '',
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(PageNav);
