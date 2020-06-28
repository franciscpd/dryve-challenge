import React from 'react';
import PropTypes from 'prop-types';
import { Box, Tooltip } from '@material-ui/core';

import * as S from './styles';

const Container = ({ title, help, extra, children, footer }) => (
  <S.Paper variant="outlined">
    <S.Container>
      <S.Header
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center">
          <S.Title>{title}</S.Title>
          {help && (
            <Tooltip title={help} arrow>
              <S.HelpIcon />
            </Tooltip>
          )}
        </Box>
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
  help: PropTypes.string,
};

Container.defaultProps = {
  extra: null,
  footer: null,
  help: null,
};

export default Container;
