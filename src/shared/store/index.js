// @ts-nocheck
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';

const middlewares = [];

middlewares.push(thunkMiddleware);

if (process.env.NODE_ENV === 'development') {
  const loggerMiddleware = createLogger({
    collapsed: true,
    duration: true,
  });

  middlewares.push(loggerMiddleware);
}

const composeEnhancers =
  process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

export default createStore(reducers, enhancer);
