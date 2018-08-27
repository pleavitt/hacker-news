import api from '../utils/api';

export const startApiCall = () => ({
  type: 'Start_Api_Call',
});

export const endApiCall = results => ({
  type: 'End_Api_Call',
  results: results.hits,
  totalPages: results.nbPages,
  currentPage: results.page,
  query: results.query,
});

export const errorApiCall = () => ({
  type: 'Error_Api_Call',
  error: 'Something went wrong on the search',
});

export const fetchResults = (query, page) => dispatch => {
  dispatch(startApiCall());

  return api.hackerNewsStories(query, page).then(
    response => {
      const devsArr = response;
      dispatch(endApiCall(devsArr));
    },
    err => {
      dispatch(errorApiCall());
    }
  );
};
