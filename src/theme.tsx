import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    background: {
      paper: '#fff',
      default: 'rgba(250, 251, 252, 1)',
    },
    primary: {
      main: 'rgba(2, 106, 167, 1)',
      contrastText: '#fff',
    },
    secondary: {
      main: 'rgba(78, 151, 194, 1)',
      contrastText: '#fff',
    },
    error: {
      main: '#f44336',
      contrastText: '#fff',
    },
    text: {
      primary: 'rgba(49, 66, 97, 1)',
      secondary: 'rgba(83, 97, 123, 1)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Noto Sans',
      'Ubuntu',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ].join(','),
  },
});

export default theme;
