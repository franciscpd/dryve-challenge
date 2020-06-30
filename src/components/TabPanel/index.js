import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const TabPanel = ({ children, activeTab, index, ...rest }) => (
  <S.Container role="tabpanel" hidden={activeTab !== index} {...rest}>
    {children}
  </S.Container>
);

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  activeTab: PropTypes.number.isRequired,
};

TabPanel.defaultProps = {
  children: null,
};

export default TabPanel;
