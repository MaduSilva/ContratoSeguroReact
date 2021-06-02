import React from 'react'

import Menu from "../../components/menu/menu";
import Rodape from "../../components/rodape/rodape"
import Funcionario from '../../assets/img/FotoPerfilFuncionario.jpeg'
import jwt_decode from 'jwt-decode';
import { Button,Form, Col, Container, Row } from 'react-bootstrap';

const PerfilFuncionario = () => {

    const nomeFuncionario = jwt_decode.nameid;

    return (
        <div>
            <Menu />
            
            <div style={{backgroundColor: "#0367A6", marginTop: "1px", display:"flex", justifyContent:"center" , height:"140px",  }}>
            <img src={Funcionario} style={{width: "200px", position:"absolute", left:"150px", top:"80px", borderRadius: "100%" }}></img>
            <h1 style={{ marginTop: "25px", color:"white", fontSize:"70px"  }}> Meus Dados</h1>
            <br />
            </div>
            <div style={{display:"flex", marginTop:"50px"}}>
            <div>
                <div style={{width: "200px", marginLeft: "120px", boxShadow:"1px 1px 1px 1px  gray", height:"30px" , display:"flex", justifyContent:"center", marginTop:"50px" }}>
                <h1 style={{fontSize:"18px", marginTop:"5px"}}>{nomeFuncionario}Nome Do Funcionário</h1>
                </div>
                <div className="mb-2" style={{marginLeft:"105px", marginTop:"30px", }}>
                <Form.Group  controlId="formBasicPassword">
                 
                  <Form.Control style={{backgroundColor: 'white', width: '200px', height:"50px", borderColor:"black"}} type="password" placeholder="      ALTERAR SENHA" name="senha"  />
                </Form.Group>

                </div>
				<div className="mb-2" style={{marginLeft:"105px", marginTop:"30px", }}>
                <Form.Group  controlId="formBasicPassword">
                 
                  <Form.Control style={{backgroundColor: 'white', width: '200px', height:"50px", borderColor:"black"}} type="password" placeholder="   CONFIRMAR SENHA" name="senha"  />
                </Form.Group>

                </div>
                <div  style={{marginLeft:"130px", marginTop:"50px", marginBottom:"80px" }}>
                <Button  variant="primary" size="lg">
                Salvar
                </Button>{' '}
                </div>
            </div>
            <div style={{width:"913px", height:"437px", boxShadow:"2px 2px 2px 2px gray", marginBottom:"40px", marginLeft:"150px" , display: "flex", justifyContent:"space-between" }}>
            <div style={{marginLeft:"155px"}}>
                <div style={{marginTop:"30px"}}>
                <h3 style={{fontSize:"20px"}}>Nome do Funcionário</h3>
                <a  style={{fontSize:"15px"}}>Maria Eduarda</a>
                </div>
                <div style={{marginTop:"30px"}}>
                <h3 style={{fontSize:"20px"}}>Email</h3>
                <a  style={{fontSize:"15px"}}>marua@gmail.com</a>
                </div>
                <div style={{marginTop:"30px"}}>
                <h3 style={{fontSize:"20px"}}>Telefone</h3>
                <a  style={{fontSize:"15px"}}>+55 11986628675</a>
                </div>
                <div style={{marginTop:"30px"}}>
                <h3 style={{fontSize:"20px"}}>CPF</h3>
                <a  style={{fontSize:"15px"}}>31965709862</a>
                </div>
               

            </div>
			<div style={{marginRight:"155px"}}>
                <div style={{marginTop:"30px"}}>
                <h3 style={{fontSize:"20px"}}>RG</h3>
                <a  style={{fontSize:"15px"}}>66.289.567-9</a>
                </div>
                <div style={{marginTop:"30px"}}>
                <h3 style={{fontSize:"20px"}}>Pai</h3>
                <a  style={{fontSize:"15px"}}>Adalberto Silva</a>

                </div>
                <div style={{marginTop:"30px"}}>
                <h3 style={{fontSize:"20px"}}>Mãe</h3>
                <a  style={{fontSize:"15px"}}>Sandra Alves</a>
                </div>
                <div style={{marginTop:"30px"}}>
                <h3 style={{fontSize:"20px"}}>Formação</h3>
                <a  style={{fontSize:"15px"}}>Ensino Superior</a>
                </div>
               

            </div>
            </div>
            </div>
            

            < Rodape />
        </div>
    )
}

export default PerfilFuncionario;

