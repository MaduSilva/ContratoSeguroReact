import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import CadFuncionario from './pages/cadastro/cadastroFuncionario/CadFuncionario';
import CadRecrutado from './pages/cadastro/cadastroRecrutado/CadRecrutado';

import PagDocFunc from './pages/documentos/funcionario/PagDocFunc';
import DocRecrutado from './pages/documentos/recrutado/DocRecrutado' 

import LoginEmpresa from './pages/login/loginEmpresa/LoginEmpresa';
import LoginRecrutado from './pages/login/loginRecrutado/loginRecrutado';



ReactDOM.render(
  <React.StrictMode>
    < PagDocFunc/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
