import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Banner.css';

class Banner extends Component {
  render() {
    const { title, author } = this.props;
    return (
      <section className="hero is-dark">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">{title}</h1>
            <h2 className="subtitle">by {author}</h2>
          </div>
        </div>
      </section>
    );
  }
}

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Banner;
