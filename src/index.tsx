import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { install, ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

install();

ReactDOM.render(
  <ThemeProvider theme={createMuiTheme({
    typography: {
      useNextVariants: true,
    },
  })}>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
