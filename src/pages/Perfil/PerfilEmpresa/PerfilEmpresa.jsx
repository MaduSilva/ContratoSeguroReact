import React, { useState, useEffect }  from 'react';
import Rodape from '../../../components/rodape/rodape';
import Menu from '../../../components/menu/menu'

import { Button,Form, Col, Container, Row } from 'react-bootstrap';
import Empresa from '../../../assets/img/fabrica.png'
import { Height } from '@material-ui/icons';


const PerfilEmpresa = () => {

  const [empresa, setEmpresa] = useState([]);
  const [nome, setNome] = useState(0);
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cnpj, setCNPJ] = useState('');
  const [matriz, setMatriz] = useState('');
  

  useEffect(() => {
      listar();
  }, [])

  const listar = () => {
    fetch(`v1/account/company/profile-company/{id}`)
        .then(response => response.json())
        .then(dados => {
            setEmpresa(dados);

            
        })
        .catch(err => console.error(err))
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
                <div style={{width: "200px",  boxShadow:"1px 1px 1px 1px  gray", height:"30px" , display:"flex", justifyContent:"center", marginTop:"50px" }}>
                <h1 style={{fontSize:"18px", marginTop:"5px"}}>{nome}</h1>
                </div>
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
                <h3 style={{fontSize:"20px"}}>Nome da instituição</h3>
                <a  style={{fontSize:"15px"}}>{nome}</a>
                </div>
                <div style={{marginTop:"30px"}}>
                <h3 style={{fontSize:"20px"}}>Email Empresarial</h3>
                <a  style={{fontSize:"15px"}}>{email}</a>
                </div>
                <div style={{marginTop:"30px"}}>
                <h3 style={{fontSize:"20px"}}>Telefone</h3>
                <a  style={{fontSize:"15px"}}>{telefone}</a>
                </div>
                <div style={{marginTop:"30px"}}>
                <h3 style={{fontSize:"20px"}}>CNPJ</h3>
                <a  style={{fontSize:"15px"}}>{cnpj}</a>
                </div>
               

            </div>
			<div style={{marginRight:""}}>
                <div style={{marginTop:"30px"}}>
                <h3 style={{fontSize:"20px"}}>Área de atuação da empresa</h3>
                <a  style={{fontSize:"15px"}}>{matriz}</a>
                </div>
                <div style={{marginTop:"30px"}}>
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
                <div style={{marginTop:"30px"}}>
                <h3 style={{fontSize:"20px"}}>Endereço</h3>
                <a  style={{fontSize:"15px"}}>{}Endereço da instituição</a>
                </div>
                <div style={{marginTop:"30px"}}>
                <h3 style={{fontSize:"20px"}}>Informações complementares</h3>
                <a  style={{fontSize:"15px"}}>{}Centro de São Paulo</a>
                </div>
               

            </div>
            </div>
            </div>
            

            < Rodape />
        </div>
    )
}

export default PerfilEmpresa;