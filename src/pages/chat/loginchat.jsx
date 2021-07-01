import AuthenticationService from "../../services/authentication";
import Button from 'react-bootstrap/Button';

import './loginchat.css';


function Login () {
  function handleLogin () {
    AuthenticationService.loginWithGoogle()
  }

  return (
  <div className="Login">
    <div className="fundo">
      <h1><b>Seja bem-vindo(a) ao Chat da ContratoSeguro!</b></h1>
      <p>Faça Login para ter acesso!</p>
        <Button className="botaologin" onClick={handleLogin}>
          Login com o Google
        </Button>
    </div>
  </div>
  )
}

export default Login