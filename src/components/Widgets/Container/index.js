import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Container = ({ title, extra, children, footer }) => (
  <S.Paper variant="outlined">
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
      <S.Footer>{footer}</S.Footer>
    </S.Container>
  </S.Paper>
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
