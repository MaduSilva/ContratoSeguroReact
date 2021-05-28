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
    else if (jwt_decode(token).role === 'empresa') {
      return (
        <Nav className='mg-r' >
          <Nav.Link className='hover' href="/1/dashboard">Dashboard</Nav.Link>
          <Nav.Link className='hover' href="/1/cruddicas">Crud Dicas</Nav.Link>
          <Nav.Link className='hover' href="/1/crudcursos">Crud Cursos</Nav.Link>
          <Nav.Link className='hover' href="/1/crudobjetivos">Crud Objetivos</Nav.Link>
          <Nav.Link className='hover' href="/1/crudTurmas">Crud Turmas</Nav.Link>
          <NavDropdown className='hover' title={jwt_decode(token).family_name}>
            <NavDropdown.Item onClick={event => sair(event)}>Sair da conta</NavDropdown.Item >
          </NavDropdown>
        </Nav>
      )
    }
    else {
      return (
        <Nav  className='mg-r'>
          <Nav.Link className='hover' href="/timeline">Timeline</Nav.Link>
          <Nav.Link className='hover' href="/dicas">Dicas</Nav.Link>
          <Nav.Link className='hover' href="/cursos">Cursos</Nav.Link>
          <Nav.Link className='hover' href="/ranking">Ranking</Nav.Link>
          <Nav.Link className='hover' href="/objetivos">Objetivos</Nav.Link>

          <NavDropdown className='hover' title={jwt_decode(token).family_name}>
            <NavDropdown.Item href="/perfil">Perfil do Aluno</NavDropdown.Item >
            <NavDropdown.Divider />
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