import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import MyContext from './Store/MyContext';

ReactDOM.render(
  
  <>
    <MyContext>
      <App />
    </MyContext>
    </>,
  
  document.getElementById('root')
);
