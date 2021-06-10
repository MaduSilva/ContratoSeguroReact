import React, { useState, useEffect }  from 'react';
import Rodape from '../../../components/rodape/rodape';
import Menu from '../../../components/menu/menu'

import { Button,Form, Col, Container, Row } from 'react-bootstrap';
import Pessoa from '../../../assets/img/Pessoa.png'



const PerfilRecrutado = () => {

  const [data, setData] = useState([]);




    const getRecrutados = async () =>{
        fetch("https://localhost:5001/v1/account/recruited/lister-recruited")
        .then((response) => response.json())
        .then((responseJson) => (
            console.log(responseJson),
            setData(responseJson.data)
        ));
    }


    useEffect(() =>{
        getRecrutados();
    },[])
    
    
    return (
        <div>
            <Menu />
            
            <div style={{backgroundColor: "#0367A6", marginTop: "1px", display:"flex", justifyContent:"center" , height:"140px",  }}>
            <img src={Pessoa} style={{width: "150px", position:"absolute", left:"280px", top:"120px"}}></img>
            <h1 style={{ marginTop: "50px", color:"white",  }}> Meus Dados</h1>
            <br />
            </div>
           
            <div style={{display:"flex", marginTop:"50px" , justifyContent:"space-evenly"}}>
            <div>
            {Object.values(data).map(recrutado => (
                <div key={recrutado.recrutado} style={{width: "200px",  boxShadow:"1px 1px 1px px  gray", height:"30px" , display:"flex", justifyContent:"center", marginTop:"50px" }}>
                <h1 style={{fontSize:"18px", marginTop:"5px"}}>{recrutado.nome}</h1>
                </div>
                ))}
                <div className="mb-2" style={{ marginTop:"30px", }}>
                <Form.Group  controlId="formBasicPassword">
                 
                  <Form.Control style={{backgroundColor: 'white', width: '200px', height:"50px", borderColor:"black", marginLeft:"0"}} type="password" placeholder="      ALTERAR SENHA" name="senha"  />
                </Form.Group>

                </div>
				<div className="mb-2" style={{ marginTop:"30px", }}>
                <Form.Group  controlId="formBasicPassword">
                 
                  <Form.Control style={{backgroundColor: 'white', width: '200px', height:"50px", borderColor:"black", marginLeft:"0"}} type="password" placeholder="   CONFIRMAR SENHA" name="senha"  />
                </Form.Group>

                </div>
                <div  style={{ marginTop:"40px", marginBottom:"30px" }}>
                <Button  variant="primary" size="lg">
                Salvar
                </Button>{' '}
                </div>
            </div>
            <div style={{width:"913px",  boxShadow:"4px 4px 4px 4px gray", marginBottom:"40px"}}>
            <div style={{display:"flex", justifyContent:"space-around"}}>
            <div >
            
                <div style={{marginTop:"30px"}}>
                
                <h3 style={{fontSize:"20px"}}>Nome Completo</h3>
                {Object.values(data).map(recrutado => (
                <a key={recrutado.recrutado}   style={{fontSize:"15px"}}>{recrutado.nome}</a>
                ))}
                </div>
                
                
                <div style={{marginTop:"30px"}}>
                
                <h3 style={{fontSize:"20px"}}>Email</h3>
                {Object.values(data).map(recrutado => (
                <a key={recrutado.recrutado} style={{fontSize:"15px"}}>{recrutado.email}</a>
                ))}
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
                <div className="mb-2" style={{display: 'flex', justifyContent:"space-evenly" }}>
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