// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import TableBase from '../../Table';

import Container from '../Container';

import * as S from './styles';

const Table = ({ title, options, ...rest }) => (
  <Container
    title={title}
    extra={<S.Button endIcon={<ArrowDropDownIcon />}>Hoje</S.Button>}
    footer={<S.ButtonMore endIcon={<ArrowRightIcon />}>Ver tudo</S.ButtonMore>}
  >
    <TableBase
      options={{
        ...options,
        maxBodyHeight: 550,
        minBodyHeight: 550,
        tableLayout: 'fixed',
      }}
      {...rest}
    />
  </Container>
);

Table.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.shape({}),
  data: PropTypes.arrayOf(PropTypes.shape({})),
  columns: PropTypes.arrayOf(PropTypes.shape({})),
};

Table.defaultProps = {
  options: {},
  data: [],
  columns: [],
};

export default Table;
