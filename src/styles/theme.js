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
    background: {
      default: '#F3F4F6',
      paper: '#fff',
    },
    action: {
      active: '#6200ee',
    },
  },
});
