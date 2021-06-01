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
        <Nav>
           <Nav.Link className='hover' id="navstyle" href="/">Home</Nav.Link>
           <Nav.Link className='hover' id="navstyle" href="#oquee">O que é</Nav.Link>
           <Nav.Link className='hover' id="navstyle" href="#planos">Planos</Nav.Link>
          <Nav.Link className='hover'  id="navstyle" href="#faleconosco">Fale conosco</Nav.Link>
        
        </Nav>
      );
    }
    else if (jwt_decode(token).role === 'Empresa') {
      return (
        <Nav className='mg-r' id="empresa" >
          <Nav.Link className='hover' id="navstyle"  href="/empresa/dashboard">Dashboard</Nav.Link>
          <Nav.Link className='hover' id="navstyle"  href="/empresa/cadastrofunc">Cadastro</Nav.Link>
          <Nav.Link className='hover' id="navstyle"  href="/empresa/perfilrec">Perfil</Nav.Link>
          <NavDropdown id="navstyle" title={jwt_decode(token).family_name}>
            <NavDropdown.Item onClick={event => sair(event)}>Sair da conta</NavDropdown.Item >
          </NavDropdown>
        </Nav>
      )
    }else if (jwt_decode(token).role === 'Recrutado') {
      return (
        <Nav className='mg-r' id="recrutado" >
          <Nav.Link className='hover' href="/recrutado/dashboard">Dashboard</Nav.Link>
          <Nav.Link className='hover' href="/recrutado/documentos">Documentos</Nav.Link>
          <Nav.Link className='hover' href="/recrutado/chat">Chat</Nav.Link>
          <Nav.Link className='hover' href="/recrutado/perfilrec">Perfil</Nav.Link>
          <NavDropdown className='hover' title={jwt_decode(token).family_name}>
            <NavDropdown.Item onClick={event => sair(event)}>Sair da conta</NavDropdown.Item >
          </NavDropdown>
        </Nav>
      )
    }
    else {
      return (
        <Nav className='mg-r' id="funcionario" >
        <Nav.Link className='hover' href="/funcionario/dashboard">Dashboard</Nav.Link>
        <Nav.Link className='hover' href="/funcionario/documentos">Documentos</Nav.Link>
        <Nav.Link className='hover' href="/funcionario/chat">Chat</Nav.Link>
        <Nav.Link className='hover' href="/funcionario/cadastrorec">Cadastro</Nav.Link>
        <Nav.Link className='hover' href="/funcionario/perfilfunc">Perfil</Nav.Link>
        <NavDropdown className='hover' title={jwt_decode(token).family_name}>
          <NavDropdown.Item onClick={event => sair(event)}>Sair da conta</NavDropdown.Item >
        </NavDropdown>
      </Nav>
      )
    }


  }
  return (
    <div>
      <Navbar collapseOnSelect  className="d-flex justify-content-around"  expand="lg" style={{backgroundColor: 'white'}} variant="dark">
       
        <Navbar.Brand href="/"><img src={logo} className="nav-logo" alt="Contrato Seguro" /></Navbar.Brand>
        <Navbar.Toggle style={{backgroundColor: '#e9e9e9', marginTop: '-4px'}} aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        
          {renderMenu()}
          <Nav className="ml-auto p-2">
        <Nav.Link className='hover' id="navstyle2" href="/login">Login</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>

    </div>
  )
}

export default Menu;