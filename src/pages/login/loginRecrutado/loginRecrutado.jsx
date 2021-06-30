import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import Rodape from '../../../components/rodape/rodape';
import Menu from '../../../components/menu/menu'
import './LoginRecrutado.css';
import Foguete from '../../../assets/img/fuguete.png';
import Logo from '../../../assets/img/logo2.png';
import { useFormik } from 'formik';
import ContaServicoRec from '../loginRecrutado/contaservico';
import { useToasts } from 'react-toast-notifications';



const LoginRecrutado = () => {

  const history = useHistory();
  const {addToast} = useToasts(); 
  
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
            addToast(resultado.data.mensagem, {
              appearance: 'success',
              autoDismiss: true,
            })
            //mensagem
            console.log("Logado")
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


return (

  <div>
    <Menu />
    <div class="containerloginrec">
      <div class="medialoginrec">
      <div class="FundoInforec">
        <h1>Seja muito bem vindo recrutado!</h1>
        <ul>
          <li><a><b>+ Praticidade!</b></a></li>
          <li><a><b>+ Rapidez</b></a></li>
          <li><a><b>- Burocracia!</b></a></li>
        </ul>
        <img src={Foguete} className="foguete-logorec" alt="foguete" />
      </div>
      <div Class="FundoFormrec">
        <div class="InputsFormrec">
         
          <div>
            <Form className='form-signinrec' onSubmit={formik.handleSubmit} >
          
              <img src={Logo} class="logo-arec" alt="logo" />


              <Form.Group controlId="formBasicEmail" id="inputrec">
                <Form.Control style={{ backgroundColor: 'white', width: '70%', marginLeft: '10%' }} type="email" placeholder="EMAIL" name="email" onChange={formik.handleChange} value={formik.values.email} required />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" id="inputrec">

                <Form.Control style={{ backgroundColor: 'white', width: '70%', marginLeft: '10%' }} type="password" placeholder="SENHA" name="senha" onChange={formik.handleChange} value={formik.values.senha} required />
              </Form.Group>

              <Form.Group id="inputrec">

                <Form.Control style={{ backgroundColor: 'white', width: '70%', marginLeft: '10%' }} type="text" placeholder="CPF" name="cpf" onChange={formik.handleChange} value={formik.values.cpf} required />
              </Form.Group>

              <a class="LogarFuncionariorec" href="/loginfunc"style={{ fontSize:'0.8em'}}> <b> Logar como funcionário?<br/></b></a>
              <a class="LogarEmpresarec" href="/loginemp"> <b > Logar como empresa?</b></a>
              <br/>

              <Button className="ButtonSignInrec" variant="primary" type="submit" disabled={formik.isSubmitting}>
                Entrar
                    </Button>
              <br /><br />
              <a href="/resetsenha" style={{ marginTop: '30px', fontSize: '10px',  }}>Esqueci a senha!</a>
            </Form>
          </div>
        </div>
      </div>
      </div>
    </div>
    <Rodape/>
  </div>

)
}



export default LoginRecrutado;