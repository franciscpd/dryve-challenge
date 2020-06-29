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
  pageSize: 10,
};

const Table = ({ options, data, columns, ...rest }) => (
  <S.Table selection={!!options.selection}>
    <MaterialTable
      options={{ ...defaultOptions, ...options }}
      columns={columns.slice(0).map((it) => ({ ...it }))}
      data={Array.isArray(data) ? data.slice(0).map((it) => ({ ...it })) : data}
      localization={{
        pagination: {
          labelDisplayedRows: '{from}-{to} de {count}',
          labelRowsSelect: '',
          labelRowsPerPage: 'Itens por página:',
        },
        header: {
          actions: '',
        },
      }}
      {...rest}
    />
  </S.Table>
);

Table.propTypes = {
  options: PropTypes.shape({
    selection: PropTypes.bool,
  }),
  data: PropTypes.arrayOf(PropTypes.shape({})),
  columns: PropTypes.arrayOf(PropTypes.shape({})),
};

Table.defaultProps = {
  options: {},
  data: [],
  columns: [],
};

export default Table;
