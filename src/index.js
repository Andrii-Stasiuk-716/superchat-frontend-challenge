import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica Neue, sans-serif;
    color: #525252;
    
  }
`;



ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>,
  document.getElementById('root')
);


