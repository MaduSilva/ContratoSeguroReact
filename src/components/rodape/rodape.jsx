import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import jwt_decode from 'jwt-decode'
import { useHistory } from 'react-router-dom'
import logo from '../../assets/img/logo-brq.png';
import '../rodape/rodape.css';

const Rodape = () => {
  
  return (
    <div>
      <Navbar collapseOnSelect  className="d-flex justify-content-around"  expand="lg" style={{backgroundColor: 'white'}} variant="dark">
       
        <Navbar.Brand href="/"><img src={logo} className="nav-logo" alt="Contrato Seguro" /></Navbar.Brand>
       <a style={{color: 'black'}}>© 2021 BRQ</a>
       <a style={{color: 'black'}}href="mailto:brq@brq.com">brq@brq.com</a>
       <a style={{color: 'black'}} href="https://www.brq.com/politica-privacidade/">Política de Privacidade</a>
      </Navbar>

    </div>
  )
}

export default Rodape;