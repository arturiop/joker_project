import {
  applyMiddleware, compose, createStore, Store,
} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store: Store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
