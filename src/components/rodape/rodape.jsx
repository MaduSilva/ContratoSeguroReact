import React from 'react';
import '../rodape/rodape.css'

//imagens 
import logo from '../../assets/img/logo-brq.png';

export default function Rodape() {
  return (
    <div className="ContainerFooter">
      <div className="allfooter"> 
      <img src={logo} className="footer-logo" alt="logo brq" />
      <div className="textos">
      <a>© 2021 BRQ</a>
      <a>Todos os direitos reservados 2021.</a>
      <a href="https://www.brq.com/politica-privacidade/">Politicas de Privacidade</a>
      </div>
      </div>
    </div>
  );
}