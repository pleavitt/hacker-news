import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Parser from 'html-react-parser';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class Result extends Component {
  render() {
    const { result } = this.props;

    return (
      <ListItem key={result.title} button component="a" href={result.url}>
        <ListItemText
          primary={Parser(result._highlightResult.title.value)}
          secondary={result.url.split('/')[2]}
        />
      </ListItem>
    );
  }
}

Result.propTypes = {
  result: PropTypes.object,
};

export default Result;
