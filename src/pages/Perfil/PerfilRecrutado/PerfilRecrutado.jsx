import React from 'react';
import Rodape from '../../../components/rodape/rodape';
import Menu from '../../../components/menu/menu'
import jwt_decode from 'jwt-decode';
import { Button,Form, Col, Container, Row } from 'react-bootstrap';
import Pessoa from '../../../assets/img/Pessoa.png'



const PerfilRecrutado = () => {

    const token = localStorage.getItem('token-contratoseguro')
    const nomeRecrutado = jwt_decode(token).family_name;
    const emailRecrutado = jwt_decode(token).email;
    
    
    return (
        <div>
            <Menu />
            
            <div style={{backgroundColor: "#0367A6", marginTop: "1px", display:"flex", justifyContent:"center" , height:"140px",  }}>
            <img src={Pessoa} style={{width: "150px", position:"absolute", left:"150px", top:"120px"}}></img>
            <h1 style={{ marginTop: "50px", color:"white",  }}> Meus Dados</h1>
            <br />
            </div>
           
            <div style={{display:"flex", marginTop:"50px"}}>
            <div>
                <div style={{width: "200px", marginLeft: "120px", boxShadow:"1px 1px 1px 1px  gray", height:"30px" , display:"flex", justifyContent:"center", marginTop:"50px" }}>
                <h1 style={{fontSize:"18px", marginTop:"5px"}}>{nomeRecrutado}</h1>
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
                <div  style={{marginLeft:"120px", marginTop:"40px", marginBottom:"30px" }}>
                <Button  variant="primary" size="lg">
                Salvar
                </Button>{' '}
                </div>
            </div>
            <div style={{width:"913px",  boxShadow:"4px 4px 4px 4px gray", marginBottom:"40px", marginLeft:"150px"}}>
            <div style={{display:"flex", justifyContent:"space-around"}}>
            <div >
                <div style={{marginTop:"30px"}}>
                <h3 style={{fontSize:"20px"}}>Nome Completo</h3>
                <a  style={{fontSize:"15px"}}>{nomeRecrutado}</a>
                </div>
                <div style={{marginTop:"30px"}}>
                <h3 style={{fontSize:"20px"}}>Email </h3>
                <a  style={{fontSize:"15px"}}>{emailRecrutado}</a>
                </div>
                <div style={{marginTop:"25px"}}>
                <h3 style={{fontSize:"20px"}}>Telefone</h3>
                <div>
                <Form.Group >
                 
                  <Form.Control style={{backgroundColor: 'white', width: '230px', height:"30px", borderColor:"black", marginLeft:"-3px"}} type="Text" placeholder=" Informe seu Telefone aqui" name="telefone"  />
                </Form.Group>

                </div>
                </div>
                <div style={{marginTop:"20px"}}>
                <h3 style={{fontSize:"20px"}}>Área de atuação</h3>
                <div>
                <Form.Group >
                 
                  <Form.Control style={{backgroundColor: 'white', width: '230px', height:"30px", borderColor:"black", marginLeft:"-3px"}} type="Text" placeholder=" Informe sua área de atuação" name="atuacao"  />
                </Form.Group>

                </div>
                </div>
               

               </div>
               <div>
			          <div>
                <div style={{marginTop:"30px"}}>
                <h3 style={{fontSize:"20px"}}>Formação</h3>
                <div>
                <Form.Group >
                 
                  <Form.Control style={{backgroundColor: 'white', width: '230px', height:"30px", borderColor:"black", marginLeft:"-3px"}} type="Text" placeholder=" Informe sua formação aqui" name="formacao"  />
                </Form.Group>

                </div>
                </div>
                <div style={{marginTop:"20px"}}>
                <h3 style={{fontSize:"20px"}}>Pais/Estado</h3>
                <select name="estado">
                <option selected="" value="">Brasil</option>
                <option value="Acre">Acre</option>
                <option value="Alagoas">Alagoas</option>
                <option value="Amapá">Amapá</option>
                <option value="Amazonas">Amazonas</option>
                <option value="Bahia">Bahia</option>
                <option value="Ceará">Ceará</option>
                <option value="Distrito Federal">Distrito Federal</option>
                <option value="Espírito Santo">Espírito Santo</option>
                <option value="Goiás">Goiás</option>
                <option value="Maranhão">Maranhão</option>
                <option value="Mato Grosso">Mato Grosso</option>
                <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
                <option value="Minas Gerais">Minas Gerais</option>
                <option value="Pará">Pará</option>
                <option value="Paraíba">Paraíba</option>
                <option value="Paraná">Paraná</option>
                <option value="Pernambuco">Pernambuco</option>
                <option value="Piauí">Piauí</option>
                <option value="Rio de Janeiro">Rio de Janeiro</option>
                <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                <option value="Rio Grande do Norte">Rio Grande do Norte</option>
                <option value="Rondônia">Rondônia</option>
                <option value="Roraima">Roraima</option>
                <option value="Santa Catarina">Santa Catarina</option>
                <option value="São Paulo">São Paulo</option>
                <option value="Sergipe">Sergipe</option>
                <option value="Tocantins">Tocantins</option>
                </select>
                </div>
                <div style={{marginTop:"20px"}}>
                <h3 style={{fontSize:"20px"}}>Endereço</h3>
                <div>
                <Form.Group >
                 
                  <Form.Control style={{backgroundColor: 'white', width: '230px', height:"30px", borderColor:"black", marginLeft:"-3px"}} type="Text" placeholder=" Informe seu Endereço" name="endereco"  />
                </Form.Group>
         
                </div>
                </div>
                <div style={{marginTop:"22px"}}>
                <h3 style={{fontSize:"20px"}}>Informações complementares</h3>
                <input style={{marginTop:"7px"}} id="date" type="date"></input>
                </div>
                </div>
                 </div>
                </div>
                <div className="mb-2" style={{display: 'flex', justifyContent:"space-around" }}>
                <div style={{}}>
                <Button  variant="secondary" size="lg">
                Cancelar
                </Button>{' '}
                </div>
                <div>
                <Button variant="primary" size="lg">
                Salvar
                </Button>
                </div>
                </div>

            
            </div>
            </div>
            

            < Rodape />
        </div>
    )
}

export default PerfilRecrutado;