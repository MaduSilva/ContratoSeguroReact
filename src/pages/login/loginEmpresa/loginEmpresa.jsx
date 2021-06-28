import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import Rodape from '../../../components/rodape/rodape';
import Menu from '../../../components/menu/menu'
import './LoginEmpresa.css';
import Foguete from '../../../assets/img/fuguete.png';
import Logo from '../../../assets/img/logo2.png';
import Seta from '../../../assets/img/seta.png';
import Seta2 from '../../../assets/img/seta2.png';
import { useFormik } from 'formik';
import { useToasts } from 'react-toast-notifications';
import ContaServico from '../loginEmpresa/contaEmpresaServico';


const LoginEmpresa = () => {
  const {addToast} = useToasts(); 
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: '',
      senha: '',
      cnpj: '',
    },
    onSubmit: (values, { setSubmitting }) => {
      ContaServico.logar(values)
        .then(resultado => {
            console.log(`Resultado ${resultado.data}`)
            setSubmitting(false);
            if(resultado.data.sucesso){
                //mensagem
                //mensagem
              addToast(resultado.data.mensagem, {
                appearance: 'success',
                autoDismiss: true,
            })
                //salvar local storage
                localStorage.setItem('token-contratoseguro', resultado.data.data.token)
                //redirecionar tela admin
                history.push('/empresa/dashboard');
            } else {
              addToast(resultado.data.mensagem, {
                appearance: 'error',
                autoDismiss: true,
            })
            }
        })
        .catch(error => console.error(error));
    },
});


  return (
    
    <div class="body">
      <Menu />
      <Container>
        <div class="Bemvindo">
          <h1>Seja muito bem vindo!</h1>
          <ul>
            <li><a><b>+ Praticidade!</b></a></li>
            <li><a><b>+ Rapidez</b></a></li>
            <li><a><b>Menos burocracia!</b></a></li>
          </ul>
          <img src={Foguete} className="foguete-logo" alt="foguete" />
        </div>
        <div Class="FormFundo">
          <div class="FormInputs">
            <div>
            <img class="set" src={Seta} alt="seta" />
              <a class="Logar" href="/login"> <b > Voltar </b></a>
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
                
                  <Form.Control style={{backgroundColor: 'white', width: '200px', marginLeft: '49px'}} type="text" placeholder="CNPJ" name="cnpj" onChange={formik.handleChange} value={formik.values.cnpj} required />
                </Form.Group>


                <Button className="ButtonSignIn" variant="primary" type="submit" disabled={formik.isSubmitting}>
                  Entrar
                    </Button>
                <br /><br />
                {/* <a style={{ marginTop: '30px' }}>Esqueci a senha!</a> */}
              </Form>
            </div>
          </div>
        </div>
      </Container>
      <Rodape />
    </div>

  )
}

export default LoginEmpresa;