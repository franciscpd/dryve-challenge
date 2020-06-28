import React from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';

import * as S from './styles';

const defaultOptions = {
  search: false,
  paging: false,
  showTitle: false,
  toolbar: false,
  draggable: false,
};

const Table = ({ options, data, columns, ...rest }) => (
  <S.Table>
    <MaterialTable
      options={{ ...defaultOptions, ...options }}
      columns={columns.slice(0).map((it) => ({ ...it }))}
      data={Array.isArray(data) ? data.slice(0).map((it) => ({ ...it })) : data}
      {...rest}
    />
  </S.Table>
);

Table.propTypes = {
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
