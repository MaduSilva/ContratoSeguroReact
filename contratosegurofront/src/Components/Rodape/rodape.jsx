import React from 'react';
import './rodape.css'

//imagens 
import logo from "../../assets/img/logo.png";

export default function Rodape() {
  return (
    <div className="Container">
      <img src={logo} className="footer-logo" alt="logo brq" />
      <a className="TextFooter1" >© 2021 BRQ</a>
      <a className="TextFooter2">Todos os direitos reservados 2021.</a>
      <a href="https://www.brq.com/politica-privacidade/" className="TextFooter3">Politicas de Privacidade</a>
    </div>
  );
}