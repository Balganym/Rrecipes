import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Main from './components/Main';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
ReactDOM.render(
  <MuiThemeProvider>
    <Main/>
  </MuiThemeProvider>,
  document.getElementById('root')
);
