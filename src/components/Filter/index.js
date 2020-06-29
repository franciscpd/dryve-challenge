import React from 'react';
import FilterListIcon from '@material-ui/icons/FilterList';

import * as S from './styles';

const Filter = (props) => (
  <S.Button {...props} startIcon={<FilterListIcon />} />
);

export default Filter;
