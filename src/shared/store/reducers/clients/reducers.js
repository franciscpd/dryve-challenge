import {
  CLIENTS_DATA,
  CLIENTS_DATA_FETCHING,
  CLIENTS_DATA_FETCHED,
} from './types';

const INITIAL_STATE = {
  data: [],
  isLoading: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CLIENTS_DATA:
      return { ...state, data: action.payload };
    case CLIENTS_DATA_FETCHING:
      return { ...state, isLoading: true };
    case CLIENTS_DATA_FETCHED:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
