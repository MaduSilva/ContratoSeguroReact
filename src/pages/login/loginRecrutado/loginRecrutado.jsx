import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import Rodape from '../../../components/rodape/rodape';
import Menu from '../../../components/menu/menu'
import './LoginRecrutado.css';
import Foguete from '../../../assets/img/fuguete.png';
import Logo from '../../../assets/img/logo2.png';
import Seta from '../../../assets/img/seta.png';
import Seta2 from '../../../assets/img/seta2.png';
import { useFormik } from 'formik';
import ContaServico from '../loginRecrutado/contaservico';
import { useToasts } from 'react-toast-notifications';



const LoginRecrutado = () => {

  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: '',
      senha: '',
      cpf: '',
    },
    onSubmit: (values) => {

      ContaServico
        .logar(values)
        .then(resultado => resultado.json())
        .then(resultado => {

          if (resultado.sucesso) {
            //mensagem
            alert("sucesso")
            //salvar local storage
            localStorage.setItem('token-contratoseguro', resultado.data.token)
            //redirecionar tela admin
            history.push('/2/documentos');
          } else {
            alert("erro")
          }
        })
        .catch(error => {
          console.error('API ERROR' + error);
        })
      
      }

    });


  return (
    
    <div class="body">
      <Menu />
      <Container>
        <div class="FundoInfo">
          <h1>Seja muito bem vindo recrutado!</h1>
          <ul>
            <li><a><b>+ Praticidade!</b></a></li>
            <li><a><b>+ Rapidez</b></a></li>
            <li><a><b>Menos burocracia!</b></a></li>
          </ul>
          <img src={Foguete} className="foguete-logo" alt="foguete" />
        </div>
        <div Class="FundoForm">
          <div class="InputsForm">
            <div>
              <a class="LogarEmpresa" href="/loginemp"> <b > Logar como empresa</b></a>
              <img class="setaEmpresa" src={Seta2} alt="seta" />
            </div>
            <div>
              <Form className='form-signin' onSubmit={formik.handleSubmit} >
                <img src={Logo} class="logo-a" alt="logo" />


                <Form.Group controlId="formBasicEmail">
                  <Form.Control style={{backgroundColor: 'white', width: '200px', marginLeft: '49px'}} type="email" placeholder="EMAIL" name="email" onChange={formik.handleChange} value={formik.values.email} required />
                </Form.Group>

                <Form.Group  controlId="formBasicPassword">
                 
                  <Form.Control style={{backgroundColor: 'white', width: '200px', marginLeft: '49px'}} type="password" placeholder="SENHA" name="senha" onChange={formik.handleChange} value={formik.values.senha} required />
                </Form.Group>

                <Form.Group >
                
                  <Form.Control style={{backgroundColor: 'white', width: '200px', marginLeft: '49px'}} type="text" placeholder="CPF" name="cpf" onChange={formik.handleChange} value={formik.values.cpf} required />
                </Form.Group>


                <Button className="ButtonSignIn" variant="primary" type="submit" disabled={formik.isSubmitting}>
                  Entrar
                    </Button>
                <br /><br />
                <a style={{ marginTop: '30px' }}>Esqueci a senha!</a>
              </Form>
            </div>
          </div>
        </div>
      </Container>
      <Rodape />
    </div>

  )
}

export default LoginRecrutado;