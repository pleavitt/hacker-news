import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { searchReducer } from './reducer';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default function configureStore() {
  return createStoreWithMiddleware(searchReducer);
}
