import React, { useState, useEffect }  from 'react';
import Rodape from '../../../components/rodape/rodape';
import Menu from '../../../components/menu/menu'

import { Button,Form, Col, Container, Row } from 'react-bootstrap';
import Empresa from '../../../assets/img/fabrica.png'
import { Height } from '@material-ui/icons';
import http from '../../../utils/http-axios';
import EmpresaServico from '../../../servicos/EmpresaServico'

const PerfilEmpresa = () => {

    const [data, setData] = useState([]);
    const [idEmpresa, setIdEmpresa] = useState('');
    const [empresa, setEmpresa] = useState([]);

    useEffect(() => {
        listEmpresa();
    }, []);

    const listEmpresa = () => {
        EmpresaServico
            .listar()
            .then(dado => {
                setIdEmpresa(dado.idEmpresa);
            })
            .then(resultado => {
                console.log(`resultado ${JSON.stringify(resultado.data)}`);
                setEmpresa(resultado.data.data);
            }) 
            .catch(erro => {
                console.error(`erro ${erro}`);
            })
    }

    


   

    
    
    return (
        <div>
            <Menu />
            
            <div style={{backgroundColor: "#0367A6", marginTop: "1px", display:"flex", justifyContent:"center" , height:"140px",   }}>
            <img src={Empresa} style={{width: "150px", position:"absolute", left:"275px", top:"120px"}}></img>
            <h1 style={{ marginTop: "50px", color:"white",  }}> Meus Dados</h1>
            <br />
            </div>
            <div style={{display:"flex", marginTop:"50px" , justifyContent:"space-evenly"}}>

            <div>
            {empresa.map((item, index) => {
                return(
                <div key={index} style={{width: "200px",  boxShadow:"1px 1px 1px px  gray", height:"30px" , display:"flex", justifyContent:"center", marginTop:"50px" }}>
                <h1 style={{fontSize:"18px", marginTop:"5px"}}>{item.nome}</h1>
                </div>
                 )})}
                <div className="mb-2" style={{marginTop:"30px",  }}>
                
                <Form.Group  controlId="formBasicPassword">
                 
                  <Form.Control style={{backgroundColor: 'white', width: '200px', height:"50px", borderColor:"black", marginLeft:"0px"}} type="password" placeholder="      ALTERAR SENHA" name="senha"  />
                </Form.Group>

                </div>
				<div className="mb-2" style={{ marginTop:"30px", }}>
                <Form.Group  controlId="formBasicPassword">
                 
                  <Form.Control style={{backgroundColor: 'white', width: '200px', height:"50px", borderColor:"black",marginLeft:"0px"}} type="password" placeholder="   CONFIRMAR SENHA" name="senha"  />
                </Form.Group>

                </div>
                <div  style={{ marginTop:"30px",  }}>
                <Button  variant="primary" size="lg">
                Salvar
                </Button>{' '}
                </div>
            </div>
            <div style={{width:"913px", height:"437px", boxShadow:"4px 4px 4px 4px gray", marginBottom:"40px",  display: "flex", justifyContent:"space-around" }}>
            <div>
            <div style={{marginTop:"30px"}}>
                
                <h3 style={{fontSize:"20px"}}>Nome Completo</h3>
                {Object.values(data).map(empresa => (
                <a key={empresa.empresa}   style={{fontSize:"15px"}}>{empresa.nome}</a>
                ))}
                </div>
                
                
                <div style={{marginTop:"30px"}}>
                
                <h3 style={{fontSize:"20px"}}>Email</h3>
                {Object.values(data).map(empresa => (
                <a key={empresa.empresa} style={{fontSize:"15px"}}>{empresa.email}</a>
                ))}
                </div>
                <div style={{marginTop:"30px"}}>
                <h3 style={{fontSize:"20px"}}>Telefone</h3>
                {Object.values(data).map(empresa => (
                <a key={empresa.empresa} style={{fontSize:"15px"}}>{empresa.telefone}</a>
                ))}
                </div>
                <div style={{marginTop:"30px"}}>
                <h3 style={{fontSize:"20px"}}>CNPJ</h3>
                {Object.values(data).map(empresa => (
                <a key={empresa.empresa} style={{fontSize:"15px"}}>{empresa.cnpj}</a>
                ))}
                </div>
               

            </div>
			<div style={{marginRight:""}}>
                <div style={{marginTop:"30px"}}>
                <h3 style={{fontSize:"20px"}}>Área de atuação da empresa</h3>
                {Object.values(data).map(empresa => (
                <a key={empresa.empresa} style={{fontSize:"15px"}}>{empresa.matriz}</a>
                ))}
                </div>
                
                <div style={{marginTop:"30px"}}>
                <h3 style={{fontSize:"20px"}}>Endereço</h3>
                {Object.values(data).map(empresa => (
                <a key={empresa.empresa} style={{fontSize:"15px"}}>{empresa.Cidade}</a>
                ))}
                </div>
                <div style={{marginTop:"30px"}}>
                <h3 style={{fontSize:"20px"}}>Informações complementares</h3>
                {Object.values(data).map(empresa => (
                <a key={empresa.empresa} style={{fontSize:"15px"}}>{empresa.Logradouro}</a>
                ))}
                </div>
               

            </div>
            </div>
            </div>
            

            < Rodape />
        </div>
    )
}

export default PerfilEmpresa;