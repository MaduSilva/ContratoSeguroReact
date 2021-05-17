import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/home/home'

ReactDOM.render(
  <React.StrictMode>
    < Home/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
