import api from '@services/api';

import { CARS_DATA, CARS_DATA_FETCHING, CARS_DATA_FETCHED } from './types';

const stateAction = {
  fetchingData: () => ({
    type: CARS_DATA_FETCHING,
  }),
  fetchedData: () => ({
    type: CARS_DATA_FETCHED,
  }),
  setData: (data) => ({
    type: CARS_DATA,
    payload: data,
  }),
};

export const getData = () => async (dispatch, getState) => {
  try {
    dispatch(stateAction.fetchingData());

    const {
      cars: { data },
    } = getState();

    if (!data || data.length === 0) {
      const res = await api
        .get('/5eb553df31000060006994a8')
        .then((r) => r.data);
      dispatch(stateAction.setData(res));
    }
  } finally {
    dispatch(stateAction.fetchedData());
  }
};
