import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import Rodape from '../../components/rodape/rodape';
import Menu from '../../components/menu/menu'
import './redefinirsenha.css';
import Logo from '../../assets/img/logo2.png';
import { useFormik } from 'formik';
import { useToasts } from 'react-toast-notifications';
import * as Yup from 'yup';
import redefinirsenhaServico from './redefinirsenhaServico'

import esquecisenha from '../../assets/img/esquecisenha.png'


const RedefinirSenha = () => {

  const history = useHistory();
  const {addToast} = useToasts(); 
  
  

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values, { setSubmitting }) => {
      redefinirsenhaServico
      .redefinir(values)
        .then(resultado => {
            console.log(`Resultado ${resultado.data}`)
            setSubmitting(false);
            if(resultado.data.sucesso){
              addToast(resultado.data.mensagem, {
                appearance: 'success',
                autoDismiss: true,
              })
                //mensagem
                console.log("senha redefinida")
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
      <div class="containersenha">
        <div class="redefinir">
        <div class="FundoInfo">
          <h1>Redefinir senha</h1>
          <img src={esquecisenha} className="foguete-logo1" alt="foguete" />
        </div>
        <div Class="FundForm" >
          <div class="InputForms" >
          
            <div >
              <Form className='form-reset' onSubmit={formik.handleSubmit}>
                
                <img src={Logo} class="logo-a" alt="logo" />

                <a style={{marginTop:"10px"}}>Insira seu email:</a>
                <Form.Group controlId="formBasicEmail"  >
                  <Form.Control style={{backgroundColor: 'white', width: '200px', marginLeft:"0px", marginBottom:"0px", marginTop:"10px"}}  type="email" placeholder="Email" name="email" onChange={formik.handleChange} value={formik.values.email} required  />
                </Form.Group>

                
                <div class="button1">
                <Button className="ButtonSignInt" variant="secondary" type="button" href="/" >
                  Cancelar
                    </Button>
                <Button className="ButtonSignIng" variant="primary" type="submit" disabled={formik.isSubmitting} >
                Confirmar
                    </Button>
                <br /><br />
                </div>
                
              </Form>
            </div>
          </div>
        </div>
        </div>
      </div>
      <Rodape />
    </div>

  )
}



export default RedefinirSenha;