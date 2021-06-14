import React, { useState, useEffect }  from 'react';
import Rodape from '../../../components/rodape/rodape';
import Menu from '../../../components/menu/menu'
import { useFormik } from 'formik';
import { Button,Form, Col, Container, Row } from 'react-bootstrap';
import Pessoa from '../../../assets/img/Pessoa.png';
import { useHistory } from 'react-router-dom';
import PerfilRecrutadoServico from './PerfilRecrutadoServico';


const PerfilRecrutado = () => {


    const history = useHistory();
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
    const formik = useFormik({
        initialValues: {
          senha:'',
          alterarsenha:''
        },
        onSubmit: (values, { setSubmitting }) => {
          PerfilRecrutadoServico.alterarsenha(values)
            .then(resultado => {
                console.log(`Resultado ${resultado.data}`)
                setSubmitting(false);
                if(resultado.data.sucesso){
                    //mensagem
                    console.log("Senha Alterada")
                    //salvar local storage
                    localStorage.setItem('token-contratoseguro', resultado.data.data.token)
                    //redirecionar tela de perfil
                    history.push('/perfilrec');
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
            
            <div style={{backgroundColor: "#0367A6", marginTop: "1px", display:"flex", justifyContent:"center" , height:"140px",  }}>
            <img src={Pessoa} style={{width: "150px", position:"absolute", left:"110px", top:"120px"}}></img>
            <h1 style={{ marginTop: "50px", color:"white",  }}> Meus Dados</h1>
            <br />
            </div>
           
            <div style={{display:"flex", marginTop:"50px" , justifyContent:"space-evenly"}}>
            <div>
            
                <div  style={{width: "200px",  boxShadow:"1px 1px 1px px  gray", height:"30px" , display:"flex", justifyContent:"center", marginTop:"15px" }}>
               
                
                {Object.values(data).map(recrutado => (
                <h1 key={recrutado.recrutado} style={{fontSize:"18px", marginTop:"5px"}}>{recrutado.nome}</h1>
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
            <div style={{width:"913px",  boxShadow:"4px 4px 4px 4px gray", marginBottom:"40px"}}>
            <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center", }}>
            <div >
            
                <div style={{marginTop:"0px"}}>
                 
                <h3 style={{fontSize:"20px"}}>Nome Completo</h3>
                {Object.values(data).map(recrutado => (
                <a key={recrutado.recrutado}   style={{fontSize:"15px" }}>{recrutado.nome}</a>
                ))}
                </div>
                
                
                <div style={{marginTop:"30px"}}>
                
                <h3 style={{fontSize:"20px"}}>Email</h3>
                {Object.values(data).map(recrutado => (
                <a key={recrutado.recrutado} style={{fontSize:"15px"}}>{recrutado.email}</a>
                ))}
                </div>
               
                </div>
                <div>
                <div style={{marginTop:"100px"}}>
                <h3 style={{fontSize:"20px"}}>Telefone</h3>
                {Object.values(data).map(recrutado => (
                <a key={recrutado.recrutado} style={{fontSize:"15px"}}>{recrutado.telefone}</a>
                ))}
                </div>
                
               

               
               
			          <div>
                <div style={{marginTop:"10px"}}>
                <h3 style={{fontSize:"20px"}}>CPF</h3>
                {Object.values(data).map(recrutado => (
                <a key={recrutado.recrutado} style={{fontSize:"15px"}}>{recrutado.cpf}</a>
                ))}
                </div>
                
                </div>
                </div>
                </div>
            </div>
            </div>
            

            < Rodape />
        </div>
    )
}

export default PerfilRecrutado;