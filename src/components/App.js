import { hot } from 'react-hot-loader/root';
import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import theme from '@styles/theme';
import Layout from '@components/Layout';

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

export default hot(App);
