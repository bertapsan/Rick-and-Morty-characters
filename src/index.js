import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './stylesheets/App.css';
import './stylesheets/index.css';
import App from './components/App';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
