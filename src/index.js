import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

//pages
import DocRecrutado from './pages/documentos/recrutado/DocRecrutado';
import DocFuncionario from './pages/documentos/funcionario/DocFuncionario';
import PagDocFunc from './pages/documentos/funcionario/PagDocFunc';



ReactDOM.render(
  <React.StrictMode>
    <PagDocFunc />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
