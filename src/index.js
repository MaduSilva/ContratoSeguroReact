import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


import CadRecrutado from './pages/cadastro/cadastroRecrutado/CadRecrutado';
import CadFuncionario from './pages/cadastro/cadastroFuncionario/CadFuncionario';
import CadEmpresa from "./pages/cadastro/cadastroEmpresa/CadEmpresa";

ReactDOM.render(
  <React.StrictMode>
    < CadRecrutado/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
