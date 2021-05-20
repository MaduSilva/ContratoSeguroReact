import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import Rodape from '../../../Components/Rodape/rodape';
import Menu from '../../../Components/Menu/menu';
import './loginRecrutado.css';
import Foguete from '../../../assets/img/fuguete.png';
import Logo from '../../../assets/img/logo2.png';
import Seta from '../../../assets/img/seta.png';
import Seta2 from '../../../assets/img/seta2.png';




const LoginRecrutado = () => {
    const history = useHistory();
     const[email , setEmail] = useState('');
     const[cpf , setCpf] = useState('');
     const[senha, setSenha] = useState('');

     const logar = (event) => {
      event.preventDefault();


      fetch('http://localhost:5000/api/account/signin',{ 
         method : 'POST',
         body : JSON.stringify({

            email: email,
            senha: senha,
            Cpf : cpf,

         }),
         headers : {
           'content-type' : 'application/json'
         }
         


      
        })
        .then(response => {
          if(response.ok === true){
            return response.json();
          }
          alert('Dados Invalidos');
          console.log(response);
        })
        .then(data =>{

          localStorage.setItem('ChaveSecretaContratoSeguro', data.token);
          
          
          history.push('/home')
        })
        .catch(err => console.error(err));
      
    }
    
     

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
       <Form className='form-signin'  > 
     <img src={Logo} class="logo-a" alt="logo" />
     
     
     <Form.Group>
     <Form.Control class="form-control1" size="lg" type="email" onChange={ event => setEmail(event.target.value)} value={email} placeholder="Email" />
     <br />
     <Form.Control class="form-control1" type="email" value={cpf} onChange={ event => setCpf(event.target.value)} placeholder="CPF" />
     <br />
     <Form.Control class="form-control1" size="sm" type="password" value={senha} onChange={ event => setSenha(event.target.value)} placeholder="Senha" />
     <Button class="Button"variant="primary" onClick={ event => logar(event)}  size="lg" active>
      Entrar
     </Button>{' '}
     <a class="esq1"><b>Esqueci a senha!</b></a>
     </Form.Group>
     </Form>
     </div>
     </div>
     </div>
     </Container>
     <Rodape/>
     </div>
    
            

    )
}
export default LoginRecrutado;