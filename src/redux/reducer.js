export const searchReducer = (state = { isFetching: false, results: [] }, action) => {
  switch (action.type) {
    case 'Start_Api_Call':
      return {
        currentPage: state.currentPage,
        isFetching: true,
        query: state.query,
        results: state.results,
        totalPages: state.totalPages,
      };

    case 'End_Api_Call':
      return {
        currentPage: action.currentPage,
        isFetching: false,
        query: action.query,
        results:
          action.currentPage > 1 ? [...state.results, ...action.results] : [...action.results],
        totalPages: action.totalPages,
        newQuery: false,
      };

    case 'Error_Api_Call':
      return {
        currentPage: state.currentPage,
        error: action.error,
        isFetching: false,
        query: state.query,
        results: state.results,
        totalPages: state.totalPages,
      };

    default:
      return state;
  }
};
