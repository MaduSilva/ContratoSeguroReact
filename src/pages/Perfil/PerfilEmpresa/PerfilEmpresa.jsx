import React, { useState, useEffect }  from 'react';
import Rodape from '../../../components/rodape/rodape';
import Menu from '../../../components/menu/menu'
import { useFormik } from 'formik';
import { Button,Form, Col, Container, Row } from 'react-bootstrap';
import Empresa from '../../../assets/img/fabrica.png'
import { useHistory } from 'react-router-dom';
import PerfilEmpresaServico from './PerfilEmpresaServico';



const PerfilEmpresa = () => {

    const [data, setData] = useState([]);

    const history = useHistory();


    const getEmpresas = async () =>{
        fetch("https://localhost:5001/v1/account/company/lister-company")
        .then((response) => response.json())
        .then((responseJson) => (
            console.log(responseJson),
            setData(responseJson.data)
        ));
    }

    
    
      
      const formik = useFormik({
        initialValues: {
          senha:'',
          alterarsenha:''
        },
        onSubmit: (values, { setSubmitting }) => {
          PerfilEmpresaServico.alterarsenha(values)
            .then(resultado => {
                console.log(`Resultado ${resultado.data}`)
                setSubmitting(false);
                if(resultado.data.sucesso){
                    //mensagem
                    console.log("Senha Alterada")
                    //salvar local storage
                    localStorage.setItem('token-contratoseguro', resultado.data.data.token)
                    //redirecionar tela de perfil
                    history.push('/perfilemp');
                } else {
                    alert("Dados Inválidos")
                }
            })
            .catch(error => console.error(error));
        },
    });
          
       
    


   

    
    
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
            
                <div  style={{width: "200px",  boxShadow:"1px 1px 1px px  gray", height:"30px" , display:"flex", justifyContent:"center", marginTop:"50px" }}>
                {Object.values(data).map(empresa => (
                <h1 key={empresa.empresa} style={{fontSize:"18px", marginTop:"5px"}}>{empresa.nome}</h1>
                ))}
                </div>
                <Form className='form-signin' onSubmit={formik.handleSubmit} >
                
                
                <Form.Group  controlId="formBasicPassword">
                 
                  <Form.Control style={{backgroundColor: 'white', width: '200px', height:"50px", borderColor:"black", marginLeft:"0px"}} type="password" placeholder="      ALTERAR SENHA" name="senha" onChange={formik.handleChange} value={formik.values.senha} required  />
                </Form.Group>

               
		
                <Form.Group  controlId="formBasicPassword">
                 
                  <Form.Control style={{backgroundColor: 'white', width: '200px', height:"50px", borderColor:"black",marginLeft:"0px"}} type="password" placeholder="   CONFIRMAR SENHA" name="alterarsenha" onChange={formik.handleChange} value={formik.values.alterarsenha} required  />
                </Form.Group>

             
                
                <Button  variant="primary" size="lg"  type="submit" disabled={formik.isSubmitting}>
                Salvar
                </Button>{' '}
                </Form>
                
                
            </div>
            <div style={{width:"913px", height:"437px", boxShadow:"4px 4px 4px 4px gray", marginBottom:"40px",  display: "flex", justifyContent:"space-around" }}>
            <div >
            <div style={{marginTop:"80px"}}>
                
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
			<div >
                <div style={{marginTop:"80px"}}>
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