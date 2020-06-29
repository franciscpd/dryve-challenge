import api from '@services/api';

import {
  CLIENTS_DATA,
  CLIENTS_DATA_FETCHING,
  CLIENTS_DATA_FETCHED,
} from './types';

const stateAction = {
  fetchingData: () => ({
    type: CLIENTS_DATA_FETCHING,
  }),
  fetchedData: () => ({
    type: CLIENTS_DATA_FETCHED,
  }),
  setData: (data) => ({
    type: CLIENTS_DATA,
    payload: data,
  }),
};

export const getData = () => async (dispatch, getState) => {
  try {
    dispatch(stateAction.fetchingData());

    const {
      clients: { data },
    } = getState();

    if (!data || data.length === 0) {
      const res = await api
        .get('/v3/cd37290a-53a4-49a8-af80-a9da0b7cb083')
        .then((r) => r.data);
      dispatch(stateAction.setData(res));
    }
  } finally {
    dispatch(stateAction.fetchedData());
  }
};
