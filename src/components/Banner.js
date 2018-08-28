import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Banner.css';

class Banner extends Component {
  render() {
    const { title, author } = this.props;
    return (
      <section className="banner">
        <h1>{title}</h1>
        <h2>by {author}</h2>
      </section>
    );
  }
}

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Banner;
