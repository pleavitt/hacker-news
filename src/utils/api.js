const axios = require('axios');

module.exports = {
  hackerNewsStories(query, page = 1) {
    const encodedURI = window.encodeURI(
      `https://hn.algolia.com/api/v1/search?query=${query}&tags=story&page=${page}`
    );
    return axios.get(encodedURI).then(response => response.data);
  },
};
