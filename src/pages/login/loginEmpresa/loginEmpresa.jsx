import React, {useState} from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Rodape from '../../../components/rodape/rodape';
import Menu from '../../../components/menu/menu';
import './loginEmpresa.css';
import Foguete from '../../../assets/img/fuguete.png';
import Logo from '../../../assets/img/logo2.png';
import Seta from '../../../assets/img/seta.png';
import { useHistory } from 'react-router';




const LoginEmpresa = () => {
  const history = useHistory();
     const[email , setEmail] = useState('');
     const[cnpj , setCnpj] = useState('');
     const[senha, setSenha] = useState('');

     const logar = (event) => {
      event.preventDefault();


      fetch('http://192.168.15.9:5001/api/account/company/signin/empresa',{ 
         method : 'POST',
         body : JSON.stringify({

            email: email,
            senha: senha,
            cnpj : cnpj,

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
        <div class="loge">
        <h1>Seja muito bem vindo!</h1>
        <ul>
          <li><a><b>+ Praticidade!</b></a></li>
          <li><a><b>+ Rapidez</b></a></li>
          <li><a><b>Menos Burocracia!</b></a></li>
          </ul>
          <img src={Foguete} className="fog-logo" alt="foguete" />
        </div>
      <div Class="Log">
      <div class="Group">
      <div>
      <img class="set" src={Seta} alt="seta" />
      <a class="vol" href="/"> <b>Voltar</b></a>
      </div>
     <div>
     <Form>
     <img src={Logo} class="logo-a" alt="logo" />
     
     
     <Form.Group>
     <Form.Control class="form-control" size="lg" type="email" onChange={ event => setEmail(event.target.value)} value={email} placeholder="Email Comercial" />
     <br />
     <Form.Control class="form-control" type="email" value={cnpj} onChange={ event => setCnpj(event.target.value)} placeholder="CNPJ" />
     <br />
     <Form.Control class="form-control" size="sm" type="password" value={senha} onChange={ event => setSenha(event.target.value)} placeholder="Senha" />
     <Button class="Button"variant="primary" onClick={ event => logar(event)}  size="lg" active>
      Entrar
     </Button>{' '}
     <a class="esq"><b>Esqueci a senha!</b></a>
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
export default LoginEmpresa;