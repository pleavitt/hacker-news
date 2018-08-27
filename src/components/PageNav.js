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
    if (event.target.innerText.includes('Next')) {
      nextPage = currentPage + 1;
    } else {
      nextPage = currentPage - 1;
    }

    dispatch(fetchResults(query, nextPage));
    event.preventDefault();
  }

  render() {
    const { currentPage, totalPages, results } = this.props;
    return (
      <div className="pageNav">
        {currentPage === 1 ? (
          <Button variant="contained" color="primary" disabled>
            Previous
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={this.handleClick}>
            Previous
          </Button>
        )}
        <div>
          Page {currentPage} of {totalPages}
        </div>
        {results.length < 20 ? (
          <Button variant="contained" color="primary" disabled>
            Next page
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={this.handleClick}>
            Next page
          </Button>
        )}
      </div>
    );
  }
}

PageNav.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number,
  query: PropTypes.string.isRequired,
  results: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(PageNav);
