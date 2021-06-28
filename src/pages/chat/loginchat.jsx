import AuthenticationService from "../../services/authentication"
import Button from 'react-bootstrap/Button'


function Login () {
  function handleLogin () {
    AuthenticationService.loginWithGoogle()
  }

  return <div className="Login">
    <Button
      onClick={handleLogin}
    >
      Login com o Google
    </Button>
  </div>
}

export default Login