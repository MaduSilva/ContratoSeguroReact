import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Rodape from '../../../Components/Rodape/rodape';
import Menu from '../../../Components/Menu/menu';
import './loginRecrutado.css';
import Foguete from '../../../assets/img/fuguete.png';
import Logo from '../../../assets/img/logo2.png';
import Seta from '../../../assets/img/seta.png';
import Seta2 from '../../../assets/img/seta2.png';




const LoginRecrutado = () => {
    return (
     <div class="body">
      <Menu/>
      <Container>
        <div class="loge1">
        <h1>Seja muito bem vindo recrutado!</h1>
        <ul>
          <li><a><b>+ Praticidade!</b></a></li>
          <li><a><b>+ Rapidez</b></a></li>
          <li><a><b>Menos Burocracia!</b></a></li>
          </ul>
          <img src={Foguete} className="fog-logo" alt="foguete" />
        </div>
      <div Class="Log1">
      <div class="Group1">
      <div>
      
      <a class="vol1"> <b>Logar como empresa</b></a>
      <img class="set1" src={Seta2} alt="seta" />
      </div>
     <div>
     <img src={Logo} class="logo-a" alt="logo" />
     
     
     <Form.Group>
     <Form.Control class="form-control1" size="lg" type="text" placeholder="Email" />
     <br />
     <Form.Control class="form-control1" type="text" placeholder="CPF" />
     <br />
     <Form.Control class="form-control1" size="sm" type="text" placeholder="Senha" />
     <Button class="Button"variant="primary" size="lg" active>
      Entrar
     </Button>{' '}
     <a class="esq1"><b>Esqueci a senha!</b></a>
     </Form.Group>
     
     </div>
     </div>
     </div>
     </Container>
     <Rodape/>
     </div>
    
            

    )
}
export default LoginRecrutado;