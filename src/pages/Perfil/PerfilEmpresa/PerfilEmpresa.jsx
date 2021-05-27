import React from 'react';
import Rodape from '../../../components/rodape/rodape';
import Menu from '../../../components/menu/menu'
import jwt_decode from 'jwt-decode';
import './PerfilEmpresa.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Empresa from '../../../assets/img/fabrica.png'
import { Height } from '@material-ui/icons';

const PerfilEmpresa = () => {

    

    const nomeEmpresa = jwt_decode.nameid;
    const emailUsuario = jwt_decode.email;
    const tipoUsuario = jwt_decode.role;
    return (
        <div>
            <Menu />
            
            <div style={{backgroundColor: "#0367A6", marginTop: "1px", display:"flex", justifyContent:"center" , height:"140px",  }}>
            <img src={Empresa} style={{width: "150px", position:"absolute", left:"150px", top:"120px"}}></img>
            <h1 style={{ marginTop: "50px", color:"white",  }}> Meus Dados</h1>
            <br />
            </div>
            <div style={{display:"flex", marginTop:"50px"}}>
            <div>
                <div style={{width: "200px", marginLeft: "120px", boxShadow:"1px 1px 1px  gray", height:"30px" , display:"flex", justifyContent:"center", marginTop:"50px" }}>
                <h1 style={{fontSize:"18px"}}>{nomeEmpresa}Nome Da Empresa</h1>
                </div>
                <div className="mb-2" style={{marginLeft:"120px", marginTop:"30px"}}>
                <Button style={{backgroundColor:"white", color:"Black", borderColor: "black"}} variant="primary" size="lg">
                Alterar Senha
                </Button>{' '}
                </div>
                <div className="mb-2" style={{marginLeft:"120px", marginTop:"20px"}}>
                <Button style={{backgroundColor:"white", color:"Black", borderColor: "black", fontSize:"18px"}} variant="primary" size="lg">
                Confirmar Senha
                </Button>{' '}
                </div>
                <div  style={{marginLeft:"120px", marginTop:"40px", marginBottom:"30px" }}>
                <Button  variant="primary" size="lg">
                Salvar
                </Button>{' '}
                </div>
            </div>
            <div>

            </div>
           
            </div>
            

            < Rodape />
        </div>
    )
}

export default PerfilEmpresa;