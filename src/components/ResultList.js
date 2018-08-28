import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import './ResultList.css';
import Result from './Result.js';

class ResultList extends Component {
  render() {
    const { results } = this.props;
    return (
      <div className="popular-list">
        <List>
          {results.map(
            (result, index) =>
              result.url !== '' &&
              result.url !== null && (
                <div>
                  <Result key={index} result={result} />
                  <Divider />
                </div>
              )
          )}
        </List>
      </div>
    );
  }
}

ResultList.propTypes = {
  results: PropTypes.array,
};

ResultList.defaultProps = {
  results: [],
};

export default ResultList;
