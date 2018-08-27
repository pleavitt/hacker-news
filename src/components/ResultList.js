import React, { Component } from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import './ResultList.css';
import Result from './Result.js';

class ResultList extends Component {
  render() {
    const { results } = this.props;
    console.log(results);
    return (
      <div className="popular-list">
        <List>
          {results.map(result => (
            <div>
              <Result result={result} />
              <Divider />
            </div>
          ))}
        </List>
      </div>
    );
  }
}

export default ResultList;
