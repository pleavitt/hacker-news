export const searchReducer = (state = { isFetching: false, results: [] }, action) => {
  switch (action.type) {
    case 'Start_Api_Call':
      return {
        currentPage: state.currentPage,
        results: state.results,
        isFetching: true,
        totalPages: state.totalPages,
        query: state.query,
      };

    case 'End_Api_Call':
      return {
        isFetching: false,
        results: action.results,
        totalPages: action.totalPages,
        currentPage: action.currentPage,
        query: action.query,
      };

    case 'Error_Api_Call':
      return {
        isFetching: false,
        results: state.results,
        error: action.error,
        currentPage: state.currentPage,
        totalPages: state.totalPages,
        query: state.query,
      };

    default:
      return state;
  }
};
