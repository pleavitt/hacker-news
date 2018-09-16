import api from '../utils/api';

export const START_FETCH = 'START_FETCH';
export const END_FETCH = 'END_FETCH';
export const ERROR_FETCH = 'ERROR_FETCH';

export const startApiCall = () => ({
  type: 'START_FETCH',
});

export const endApiCall = results => ({
  type: 'END_FETCH',
  data: results,
});

export const errorApiCall = () => ({
  type: 'ERROR_FETCH',
  error: 'Something went wrong on the search',
});

export const fetchResults = (query, page) => dispatch => {
  dispatch(startApiCall());

  return api.hackerNewsStories(query, page).then(
    response => {
      const devsArr = response;
      dispatch({
        type: 'END_FETCH',
        data: devsArr,
      });
    },
    err => {
      dispatch({
        type: 'ERROR_FETCH',
        error: err.message || 'Something went wrong on the search',
      });
    }
  );
};
