import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import './ResultList.css';
import Parser from 'html-react-parser';

const Result = ({ key, result }) => (
  <a key={key} href={result.url} className="block group hover:bg-blue p-4 border-b">
    <p className="text-lg mb-1 text-black group-hover:text-white">
      {Parser(result._highlightResult.title.value)}
    </p>
    <p className="text-gray-600 text-xs group-hover:text-white">{result.url.split('/')[2]}</p>
  </a>
);

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

Result.propTypes = {
  result: PropTypes.object.isRequired,
  key: PropTypes.number,
};

Result.defaultProps = {
  key: null,
};

export default ResultList;
