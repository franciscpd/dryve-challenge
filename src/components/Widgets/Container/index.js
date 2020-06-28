import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

import * as S from './styles';

const Container = ({ title, extra, children, footer }) => (
  <Paper variant="outlined">
    <S.Container>
      <S.Header
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <S.Title>{title}</S.Title>
        {extra}
      </S.Header>
      {children}
      {footer && <S.Footer>{footer}</S.Footer>}
    </S.Container>
  </Paper>
);

Container.propTypes = {
  title: PropTypes.string.isRequired,
  extra: PropTypes.element,
  footer: PropTypes.element,
  children: PropTypes.element.isRequired,
};

Container.defaultProps = {
  extra: null,
  footer: null,
};

export default Container;
