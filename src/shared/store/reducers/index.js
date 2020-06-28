import { combineReducers } from 'redux';

import carsReducers from './cars/reducers';

export default combineReducers({ cars: carsReducers });
