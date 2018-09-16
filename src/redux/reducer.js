import { START_FETCH, END_FETCH, ERROR_FETCH } from './actions';

export const searchReducer = (state = { isFetching: false, results: [] }, action) => {
  switch (action.type) {
    case START_FETCH:
      return {
        ...state,
        isFetching: true,
      };

    case END_FETCH:
      return {
        ...state,
        currentPage: action.data.page,
        isFetching: false,
        query: action.data.query,
        results:
          action.data.page > 1 ? [...state.results, ...action.data.hits] : [...action.data.hits],
        totalPages: action.data.nbPages,
        newQuery: false,
      };

    case ERROR_FETCH:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };

    default:
      return state;
  }
};
