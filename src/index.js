// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import ContextProvider from './context/context.jsx'; // Adjust the path as needed

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById('root')
);
