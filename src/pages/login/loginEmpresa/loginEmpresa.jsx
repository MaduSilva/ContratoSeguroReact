import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Rodape from '../../../../contratosegurofront/src/Components/Rodape/rodape';
import Menu from '../../../../contratosegurofront/src/Components/Menu/menu';
import './loginEmpresa.css';
import Foguete from '../../../assets/img/fuguete.png';
import Logo from '../../../assets/img/logo2.png';
import Seta from '../../../assets/img/seta.png';




const LoginEmpresa = () => {
    return (
     <div class="body">
      <Menu/>
      <Container>
        <div class="loge">
        <h1>Seja muito bem vindo!</h1>
        <ul>
          <li><a><b>+ Praticidade!</b></a></li>
          <li><a><b>+ Rapidez</b></a></li>
          <li><a><b>Menos Burocracia!</b></a></li>
          </ul>
          <img src={Foguete} className="fog-logo" alt="foguete" />
        </div>
      <div Class="Log">
      <div class="Group">
      <div>
      <img class="set" src={Seta} alt="seta" />
      <a class="vol"> <b>Voltar</b></a>
      </div>
     <div>
     <img src={Logo} class="logo-a" alt="logo" />
     
     
     <Form.Group>
     <Form.Control class="form-control" size="lg" type="text" placeholder="CNPJ" />
     <br />
     <Form.Control class="form-control" type="text" placeholder="Email Comercial" />
     <br />
     <Form.Control class="form-control" size="sm" type="text" placeholder="Senha" />
     <Button class="Button"variant="primary" size="lg" active>
      Entrar
     </Button>{' '}
     <a class="esq"><b>Esqueci a senha!</b></a>
     </Form.Group>
     
     </div>
     </div>
     </div>
     </Container>
     <Rodape/>
     </div>
    
            

    )
}
export default LoginEmpresa;