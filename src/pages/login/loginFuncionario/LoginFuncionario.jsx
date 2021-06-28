import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import Rodape from '../../../components/rodape/rodape';
import Menu from '../../../components/menu/menu'
import './loginFuncionario.css';
import Foguete from '../../../assets/img/fuguete.png';
import Logo from '../../../assets/img/logo2.png';
import Seta from '../../../assets/img/seta.png';
import Seta2 from '../../../assets/img/seta2.png';
import { useFormik } from 'formik';
import ContaServicoFunc from '../loginFuncionario/contaservicofunc';

const LoginFuncionario = () => {

  const history = useHistory();

  const [valuebutton, setValueButton] = useState('');


  const formik = useFormik({
    initialValues: {
      email: '',
      senha: '',
      cpf: '',
    },
    onSubmit: (values, { setSubmitting }) => {
        ContaServicoFunc
          .logar(values)
          .then(resultado => {
            console.log(resultado)
            setSubmitting(false);
            if (resultado.data.sucesso) {
              //mensagem
              console.log("Logado")
              //salvar local storage
              localStorage.setItem('token-contratoseguro', resultado.data.data.token)
              //redirecionar tela admin
              history.push('/');
            } else {
              alert("Dados Inválidos")
            }
          })

      }
    }
  );


  return (

    <div class="body">
      <Menu />
      <Container>
        <div class="FundoInfo" style={{backgroundColor:'#f27405' , }}>
          <h1>Seja muito bem vindo funcionário!</h1>
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
                  <Form.Control style={{ backgroundColor: 'white', width: '60%', marginLeft: '10%' }} type="email" placeholder="EMAIL" name="email" onChange={formik.handleChange} value={formik.values.email} required />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">

                  <Form.Control style={{ backgroundColor: 'white', width: '60%', marginLeft: '10%' }} type="password" placeholder="SENHA" name="senha" onChange={formik.handleChange} value={formik.values.senha} required />
                </Form.Group>

                <Form.Group >
                  <Form.Control style={{ backgroundColor: 'white', width: '60%', marginLeft: '10%' }} type="text" placeholder="CPF" name="cpf" onChange={formik.handleChange} value={formik.values.cpf} required />
                </Form.Group>

                <a class="LogarFuncionario" href="/login"style={{ fontSize:'0.8em'}}> <b > Logar como recrutado?<br/></b></a>
                <a class="LogarEmpresa" href="/loginemp"> <b > Logar como empresa?</b></a>
                <br/>

                <Button  style={{backgroundColor:'#f27405'}} className="ButtonSignIn" variant="default" type="submit" disabled={formik.isSubmitting}>
                  Entrar
                    </Button>
                <br /><br />
                <a style={{ marginTop: '30px', fontSize: '10px',  }}>Esqueci a senha!</a>
              </Form>
            </div>
          </div>
        </div>
      </Container>
      <Rodape/>
    </div>

  )
}



export default LoginFuncionario;