import { CARS_DATA, CARS_DATA_FETCHING, CARS_DATA_FETCHED } from './types';

const INITIAL_STATE = {
  data: [],
  isLoading: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CARS_DATA:
      return { ...state, data: action.payload };
    case CARS_DATA_FETCHING:
      return { ...state, isLoading: true };
    case CARS_DATA_FETCHED:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
