// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';

import Container from '../Container';

import * as S from './styles';

const Table = ({ title, data }) => (
  <Container title={title}>
    <S.List>
      {data.map((item, key) => (
        <S.ListItem key={key}>
          <S.ListItemAvatar>
            <S.Avatar variant="square" src={item.logo} />
          </S.ListItemAvatar>
          <S.ListItemText primary={item.name} secondary={item.total} />
        </S.ListItem>
      ))}
    </S.List>
  </Container>
);

Table.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})),
};

Table.defaultProps = {
  data: [],
};

export default Table;
