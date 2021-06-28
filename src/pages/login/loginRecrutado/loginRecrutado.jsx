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
import { useToasts } from 'react-toast-notifications';
import { useFormik } from 'formik';
import ContaServicoRec from '../loginRecrutado/contaservico';
import ReactNotification from 'react-notifications-component';
<<<<<<< HEAD
import {store} from 'react-notifications-component';
import 'animate.css';
import 'react-notifications-component/dist/theme.css';
=======
import { Warning } from '@material-ui/icons';

>>>>>>> 8d10c5bed0dba8a53d5aed2e657d480b7e53dcf5



const LoginRecrutado = () => {
  const {addToast} = useToasts(); 

  //notificação
  const handleOnClickDefault = () =>{
    store.addNotification({
      title: "Sucesso!",
      message: "Logado com sucesso",
      type: "success",
      container:"top-right",
      insert:"top",
      animationIn: ["animated","fadeIn"],
      animationOut: ["animated","fadeOut"],

      dismiss:{
        duration: 10000,
        showIcon: true
      },
      width:300
    })
  }

  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: '',
      senha: '',
      cpf: '',
    },
    onSubmit: (values, { setSubmitting }) => {
      ContaServicoRec.logar(values)
        .then(resultado => {
          console.log(`Resultado ${resultado.data}`)
          setSubmitting(false);
          if (resultado.data.sucesso) {
            //mensagem
            addToast(resultado.data.mensagem, {
              appearance: 'success',
              autoDismiss: true,
          })
            //salvar local storage
            localStorage.setItem('token-contratoseguro', resultado.data.data.token)
            //redirecionar tela admin
            history.push('/');
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


<<<<<<< HEAD
return (

  <div class="body">
    <Menu />
    <ReactNotification/>
    <Container>
      <div class="mediaLogin">
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
            <Form className='form-signin' onSubmit={formik.handleSubmit} >
          
              <img src={Logo} class="logo-a" alt="logo" />


              <Form.Group controlId="formBasicEmail">
                <Form.Control style={{ backgroundColor: 'white', width: '60%', marginLeft: '20%' }} type="email" placeholder="EMAIL" name="email" onChange={formik.handleChange} value={formik.values.email} required />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">

                <Form.Control style={{ backgroundColor: 'white', width: '60%', marginLeft: '20%' }} type="password" placeholder="SENHA" name="senha" onChange={formik.handleChange} value={formik.values.senha} required />
              </Form.Group>

              <Form.Group >

                <Form.Control style={{ backgroundColor: 'white', width: '60%', marginLeft: '20%' }} type="text" placeholder="CPF" name="cpf" onChange={formik.handleChange} value={formik.values.cpf} required />
              </Form.Group>

              <a class="LogarFuncionario" href="/loginfunc"style={{ fontSize:'0.8em'}}> <b> Logar como funcionário?<br/></b></a>
              <a class="LogarEmpresa" href="/loginemp"> <b > Logar como empresa?</b></a>
              <br/>

              <Button onClick={handleOnClickDefault} className="ButtonSignIn" variant="primary" type="submit" disabled={formik.isSubmitting}>
                Entrar
                    </Button>
              <br /><br />
              <a style={{ marginTop: '30px', fontSize: '10px',  }}>Esqueci a senha!</a>
            </Form>
=======
  return (

    <div class="body">
      <Menu />
      <Container>
        <ReactNotification />
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
              <Form className='form-signin' onSubmit={formik.handleSubmit} >

                <img src={Logo} class="logo-a" alt="logo" />


                <Form.Group controlId="formBasicEmail">
                  <Form.Control style={{ backgroundColor: 'white', width: '200px', marginLeft: '49px' }} type="email" placeholder="EMAIL" name="email" onChange={formik.handleChange} value={formik.values.email} required />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">

                  <Form.Control style={{ backgroundColor: 'white', width: '200px', marginLeft: '49px' }} type="password" placeholder="SENHA" name="senha" onChange={formik.handleChange} value={formik.values.senha} required />
                </Form.Group>

                <Form.Group >

                  <Form.Control style={{ backgroundColor: 'white', width: '200px', marginLeft: '49px' }} type="text" placeholder="CPF" name="cpf" onChange={formik.handleChange} value={formik.values.cpf} required />
                </Form.Group>

                <a class="LogarFuncionario" href="/loginfunc"> <b > Logar como funcionário?<br /></b></a>
                <a class="LogarEmpresa" href="/loginemp"> <b > Logar como empresa?</b></a>
                <br />

                <Button className="ButtonSignIn" variant="primary" type="submit" disabled={formik.isSubmitting}>
                  Entrar
                </Button>
                <br /><br />
                <a style={{ marginTop: '30px', fontSize: '10px', }}>Esqueci a senha!</a>
              </Form>
            </div>
>>>>>>> 8d10c5bed0dba8a53d5aed2e657d480b7e53dcf5
          </div>
        </div>
<<<<<<< HEAD
      </Container>
      <Rodape />
    </div>
=======
      </div>
      </div>
    </Container>
    <Rodape/>
  </div>
>>>>>>> origin/BenjaminFront

  )
}



export default LoginRecrutado;