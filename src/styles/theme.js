import { createMuiTheme } from '@material-ui/core/styles';
import {} from '@material-ui/core/colors';

export default createMuiTheme({
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
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
      '500': '#a5abb7',
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
