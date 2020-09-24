import { createMuiTheme } from "@material-ui/core/styles";


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fdeb36",
    },
    secondary: {
      main: "#ffffff"
    },
  },
  shadows : [0],
  typography: {
    fontFamily: [
      'Roboto',
      'Ubuntu',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default theme;
