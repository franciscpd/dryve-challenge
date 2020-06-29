import React from 'react';
import IconButton from '@material-ui/core/IconButton';

import Status from '@components/Status';

import * as S from './styles';

const status = {
  lead: {
    label: 'Lead',
    color: '#666666',
  },
  client: {
    label: 'Cliente',
    color: '#0065ff',
  },
};

export const defaultData = (field, title, options, width) => ({
  ...options,
  title,
  field,
  width,
  render: (rowData) => <S.Default>{rowData[field]}</S.Default>,
});

export const statusData = (field, title, options, width) => ({
  ...options,
  title,
  field,
  width,
  render: (rowData) => {
    const st = status[rowData.status] || status.lead;
    return <Status color={st.color}>{st.label}</Status>;
  },
});

export const moreActions = (field, title, options, width) => ({
  ...options,
  title,
  field,
  width,
  render: () => (
    <IconButton>
      <S.MoreVertIcon />
    </IconButton>
  ),
});
