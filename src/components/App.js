import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Typography } from '@material-ui/core';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';

import theme from '@styles/theme';

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Typography color="primary" variant="h1">
          Wellcome
        </Typography>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

export default hot(App);
