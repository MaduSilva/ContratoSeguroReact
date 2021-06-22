import React, { useEffect, useState } from 'react'

import Menu from "../../components/menu/menu";
import Rodape from "../../components/rodape/rodape"
import Funcionario from '../../assets/img/avatar.jpg'
import jwt_decode from 'jwt-decode';
import { Button, Form, Col, Container, Row } from 'react-bootstrap';
import FuncionarioServico from '../../servicos/FuncionarioServico';
import './index.css';

const PerfilFuncionario = () => {

    const token = localStorage.getItem('token-contratoseguro')
    const nomeFuncionario = jwt_decode(token).family_name.Nome;
    const emailFuncionario = jwt_decode(token).email;

    const [recruited, setRecruited] = useState("");
    useEffect(() => {
        listarUser()
    }, []);


    const listarUser = () => {
        FuncionarioServico
            .buscarId(jwt_decode(token).jti[0])
            .then(response => {
                setRecruited(response.data.data)

            })
    }

    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () =>{
          if(reader.readyState === 2){
            this.setState({profileImg: reader.result})
          }
        }
        reader.readAsDataURL(e.target.files[0])
      };

    const {perfilimage} = this.state
    
    return (
        
        <div>
            <Menu />

            <div className="Barra_superior">
                <p className="Titulo_perfilfunc"> Meus Dados</p>
            </div>

            <div className="teste">
                <div className="Container_totality">
                    <div className="Container_perfil">
                        <img src={perfilimage}></img>
                        <div className="Barra_nome">
                            <h1>{jwt_decode(token).given_name}</h1>
                        </div>


                        <div className="mb-2">
                            <Form.Group controlId="formBasicPasswordProfile">

                                <Form.Control className="Input_senha" type="password" placeholder="ALTERAR SENHA" name="senha" />
                            </Form.Group>

                        </div>
                        <div className="mb-2">
                            <Form.Group controlId="formBasicPasswordProfile">

                                <Form.Control className="Input_senha" type="password" placeholder="CONFIRMAR SENHA" name="senha" />
                            </Form.Group>

                        </div>
                        <div >
                            <Button variant="primary" size="lg">
                                Salvar
                            </Button>{' '}
                        </div>
                    </div>

                    <div className="Container_totality2">
                        <div className="infoprofile">
                            <h3>Email</h3>
                            <a >{recruited.email}</a>
                        </div>

                        <div className="infoprofile">
                            <h3 >Telefone</h3>
                            <a >+55 11986628675</a>
                        </div>

                        <div className="infoprofile">
                            <h3 >Registro Geral</h3>
                            <a >{recruited.rg}</a>
                        </div>
                        <div className="infoprofile">
                            <h3 >CPF</h3>
                            <a >{recruited.cpf}</a>
                        </div>
                    </div>
                </div>
                </div>

                < Rodape />
            </div>
            )
}

            export default PerfilFuncionario;

