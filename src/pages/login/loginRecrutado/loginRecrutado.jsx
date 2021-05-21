import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import Rodape from '../../../components/rodape/rodape';
import Menu from '../../../components/menu/menu'
import './loginRecrutado.css';
import Foguete from '../../../assets/img/fuguete.png';
import Logo from '../../../assets/img/logo2.png';
import Seta from '../../../assets/img/seta.png';
import Seta2 from '../../../assets/img/seta2.png';
import { useFormik } from 'formik';




const LoginRecrutado = () => {

  const { addToast } = useToasts();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: '',
      senha: '',
      cpf: '',
    },
    onSubmit: (values, { setSubmitting }) => {
      ContaServico.logar(values)
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
            history.push('/2/documentos');
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

              <a class="vol1" href="/loginemp"> <b > Logar como empresa</b></a>
              <img class="set1" src={Seta2} alt="seta" />
            </div>
            <div>
              <Form className='form-signin'  >
                <img src={Logo} class="logo-a" alt="logo" />


                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email </Form.Label>
                  <Form.Control type="email" placeholder="Informe o email" name="email" onChange={formik.handleChange} value={formik.values.email} required />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control type="password" placeholder="Senha" name="senha" onChange={formik.handleChange} value={formik.values.senha} required />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!formik.isValid || formik.isSubmitting}>
                  Enviar
                    </Button>
                <br /><br />
                <a  style={{ marginTop: '30px' }}>Esqueci a senha!</a>
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