import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import Rodape from '../../components/rodape/rodape';
import Menu from '../../components/menu/menu'
import './redefinirsenha.css';
import Logo from '../../assets/img/logo2.png';
import Seta from '../../assets/img/seta.png';
import Seta2 from '../../assets/img/seta2.png';
import Foguete from '../../assets/img/fuguete.png'
import { useFormik } from 'formik';
import { useToasts } from 'react-toast-notifications';
import * as Yup from 'yup';

import esquecisenha from '../../assets/img/esquecisenha.png'


const RedefinirSenha = () => {

  const history = useHistory();
  
  

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values, { setSubmitting }) => {
      ContaServico.redefinir(values)
        .then(resultado => {
            console.log(`Resultado ${resultado.data}`)
            setSubmitting(false);
            if(resultado.data.sucesso){
                //mensagem
                console.log("senha redefinida")
                //salvar local storage
                localStorage.setItem('token-contratoseguro', resultado.data.data.token)
                //redirecionar tela de login
                history.push('/');
            } else {
                alert("Email não encontrado")
            }
        })
        .catch(error => console.error(error));
    },
});

  return (
    
    <div class="body">
      <Menu />
      <Container>
        <div class="redefinir">
        <div class="FundoInfo">
          <h1>Redefinir senha</h1>
          <img src={esquecisenha} className="foguete-logo1" alt="foguete" />
        </div>
        <div Class="FundForm" >
          <div class="InputForms" >
            <div >
              
              <img class="setaEmpresa" src={Seta2} alt="seta" />
            </div>
            <div >
              <Form className='form-signin' onSubmit={formik.handleSubmit}>
                
                <img src={Logo} class="logo-a" alt="logo" />

                
                <Form.Group controlId="formBasicEmail" >
                  <Form.Control style={{backgroundColor: 'white', width: '200px'}}  type="email" placeholder="Email" onChange={formik.handleChange} value={formik.values.email} required  />
                </Form.Group>

               


                <Button className="ButtonSignIng" variant="primary" type="submit" disabled={formik.isSubmitting} >
                  Confirmar
                    </Button>
                <br /><br />
                
                
              </Form>
            </div>
          </div>
        </div>
        </div>
      </Container>
      <Rodape />
    </div>

  )
}



export default RedefinirSenha;