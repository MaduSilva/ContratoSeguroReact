import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import jwt_decode from 'jwt-decode'
import { useHistory } from 'react-router-dom'
import logo from '../../assets/img/logo-brq.png';
import '../menu/menu.css';

const Menu = () => {
  const history = useHistory();
  const sair = (event) => {
    event.preventDefault();
    localStorage.removeItem('token-contratoseguro');
    history.push('/');
  }

  const renderMenu = () => {
    const token = localStorage.getItem('token-contratoseguro')

    if (token === null) {
      return (
        <Nav className="ml-auto p-2">
          <Nav.Link className='hover' id="navstyle" href="/">Home</Nav.Link>
          <Nav.Link className='hover' id="navstyle" href="#oquee">O que é</Nav.Link>
          <Nav.Link className='hover' id="navstyle" href="#planos">Planos</Nav.Link>
          <Nav.Link className='hover' id="navstyle" href="#faleconosco">Fale conosco</Nav.Link>
          <Nav.Link id="navstyle" href="/login">Login</Nav.Link>
        </Nav>
      );
    }
    else if (jwt_decode(token).role === 'Empresa') {
  return (
    <Nav className="ml-auto" id="empresa" >
      <Nav.Link className='hover' id="navstyle" href="/empresa/dashboard">Dashboard</Nav.Link>
      <Nav.Link className='hover' id="navstyle" href="/empresa/cadastrofunc">Cadastro</Nav.Link>
      <Nav.Link className='hover' id="navstyle" href="/empresa/perfilemp">Perfil</Nav.Link>
      <NavDropdown id="navstyle" title={jwt_decode(token).family_name[0]}>
        <NavDropdown.Item onClick={event => sair(event)}>Sair da conta</NavDropdown.Item >
      </NavDropdown>
    </Nav>
  )
} else if (jwt_decode(token).role === 'Recrutado') {
  return (
    <Nav className="ml-auto" id="recrutado" >
      <Nav.Link className='hover' id="navstyle" href="/recrutado/dashboard">Dashboard</Nav.Link>
      {/* <Nav.Link className='hover' id="navstyle" href="/recrutado/documentos">Documentos</Nav.Link> */}
      <Nav.Link className='hover' id="navstyle" href="/recrutado/chat">Chat</Nav.Link>
      <Nav.Link  className='hover' id="navstyle" href="/recrutado/perfilrec">Perfil</Nav.Link>
      <NavDropdown className='hover ' id="navstyle" title={jwt_decode(token).family_name[0]}>
        <NavDropdown.Item onClick={event => sair(event)}>Sair da conta</NavDropdown.Item >
      </NavDropdown>
    </Nav>
  )
}
else {
  return (
    <Nav className="ml-auto" id="funcionario" >
      <Nav.Link className='hover' id="navstyle" href="/funcionario/dashboard">Dashboard</Nav.Link>
      <Nav.Link className='hover' id="navstyle" href="/funcionario/documentos">Documentos</Nav.Link>
      <Nav.Link className='hover' id="navstyle" href="/funcionario/chat">Chat</Nav.Link>
      <Nav.Link className='hover' id="navstyle" href="/funcionario/cadastrorec">Cadastro</Nav.Link>
      <Nav.Link className='hover' id="navstyle" href="/funcionario/perfilfunc">Perfil</Nav.Link>
      <NavDropdown className='hover' id="navstyle" title={jwt_decode(token).given_name}>
        <NavDropdown.Item onClick={event => sair(event)}>Sair da conta</NavDropdown.Item >
      </NavDropdown>
    </Nav>
  )
}


  }
return (
  <div>
    <Navbar collapseOnSelect className="d-flex justify-content-around" expand="lg" style={{ width:'100%' , backgroundColor: 'white', marginBottom:'5em'}} variant="dark">

      <Navbar.Brand href="/"><img src={logo} className="nav-logo" alt="Contrato Seguro" /></Navbar.Brand>
      <Navbar.Toggle style={{ backgroundColor: '#e9e9e9', marginTop: '-4px' }} aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
  
        {renderMenu()}

      </Navbar.Collapse>
    </Navbar>

  </div>
)
}

export default Menu;
