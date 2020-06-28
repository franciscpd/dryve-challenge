import { createMuiTheme } from '@material-ui/core/styles';

import InterRegularWoff2 from '@assets/fonts/Inter-Regular.woff2';
import InterBoldWoff2 from '@assets/fonts/Inter-Bold.woff2';
import InterMediumWoff2 from '@assets/fonts/Inter-Medium.woff2';

const inter = {
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 400,
  fontDisplay: 'swap',
  src: `
    local('Inter'),
    local('Inter-Regular'),
    url(${InterRegularWoff2}) format('woff2')
  `,
};

const interBold = {
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 700,
  fontDisplay: 'swap',
  src: `
    local('Inter'),
    local('Inter-Bold'),
    url(${InterBoldWoff2}) format('woff2')
  `,
};

const interMedium = {
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 500,
  fontDisplay: 'swap',
  src: `
    local('Inter'),
    local('Inter-Medium'),
    url(${InterMediumWoff2}) format('woff2')
  `,
};

export default createMuiTheme({
  typography: {
    fontFamily: 'Inter',
    fontSize: 12,
  },
  palette: {
    primary: {
      main: '#0065ff',
    },
    secondary: {
      main: '#f3f7ff',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: '#E5E7EA',
    },
    grey: {
      '300': '#dfe3e8',
      '400': '#b2b2b2',
      '500': '#a5abb7',
      '600': '#616161',
    },
    background: {
      default: '#F3F4F6',
      paper: '#fff',
    },
    action: {
      active: '#6200ee',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [inter, interBold, interMedium],
        '*::-webkit-scrollbar': {
          width: '0.4em',
        },
        '*::-webkit-scrollbar-track': {
          '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0,0,0,.1)',
          outline: '1px solid slategrey',
        },
      },
    },
  },
});
