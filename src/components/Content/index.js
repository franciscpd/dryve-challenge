import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Content = ({ children }) => {
  return <S.Container maxWidth={false}>{children}</S.Container>;
};

Content.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Content;
