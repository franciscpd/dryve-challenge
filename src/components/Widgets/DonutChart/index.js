import React from 'react';
import PropTypes from 'prop-types';
import Chart from 'react-google-charts';

import Container from '../Container';

const defaultOptions = {
  pieHole: 0.8,
  pieSliceText: 'none',
  legend: {
    alignment: 'center',
    textStyle: {
      color: 'rgba(0, 0, 0, 0.87)',
      fontName: 'Inter',
      fontSize: 14,
      bold: true,
    },
  },
  tooltip: {
    trigger: 'hover',
    text: 'percentage',
  },
  enableInteractivity: true,
};

const DonutChart = ({ title, data, options, colors, help }) => (
  <Container title={title} help={help}>
    <Chart
      width="100%"
      height="200px"
      chartType="PieChart"
      data={data}
      options={{ ...defaultOptions, ...options, colors }}
    />
  </Container>
);

DonutChart.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
  ),
  options: PropTypes.shape({}),
  colors: PropTypes.arrayOf(PropTypes.string),
  help: PropTypes.string,
};

DonutChart.defaultProps = {
  data: [],
  options: {},
  colors: ['#1070ca', '#ec4c47', '#f7d154'],
  help: null,
};

export default DonutChart;
