import { combineReducers } from 'redux';

import carsReducer from './cars/reducers';
import clientsReducer from './clients/reducers';

export default combineReducers({ cars: carsReducer, clients: clientsReducer });
