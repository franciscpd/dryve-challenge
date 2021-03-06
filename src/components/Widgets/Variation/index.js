import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Box, Typography } from '@material-ui/core';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';

import { percent as percentFormatter } from '@shared/utils/formatters';

import * as S from './styles';

const Variation = ({ label, value, icon, type, percent, captionPercent }) => (
  <Paper variant="outlined">
    <S.Container
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box display="flex" flexDirection="column" justifyContent="space-between">
        <S.Label>{label}</S.Label>
        <S.Value>{value}</S.Value>
        {type === 'down' ? (
          <S.PercentDown display="flex" alignItems="center">
            <ArrowDropDown />
            {percentFormatter.format(percent)}
            <Typography>{captionPercent}</Typography>
          </S.PercentDown>
        ) : (
          <S.PercentUp display="flex" alignItems="center">
            <ArrowDropUp />
            {percentFormatter.format(percent)}
            <Typography>{captionPercent}</Typography>
          </S.PercentUp>
        )}
      </Box>
      <S.CircleIcon>{icon}</S.CircleIcon>
    </S.Container>
  </Paper>
);

Variation.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  icon: PropTypes.element.isRequired,
  type: PropTypes.oneOf(['up', 'down']).isRequired,
  percent: PropTypes.number,
  captionPercent: PropTypes.string.isRequired,
};

Variation.defaultProps = {
  value: '0',
  percent: 0,
};

export default Variation;
