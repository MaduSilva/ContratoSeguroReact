import React, { useEffect, useState } from 'react'

import Menu from "../../../components/menu/menu";
import Rodape from "../../../components/rodape/rodape"
import Empresa from '../../../assets/img/avatar.jpg'
import jwt_decode from 'jwt-decode';
import { Button, Form, Col, Container, Row } from 'react-bootstrap';
import FuncionarioServico from '../../../servicos/EmpresaServico';
import EmpresaServico from '../../../servicos/EmpresaServico';


const PerfilEmpresa = () => {

    const token = localStorage.getItem('token-contratoseguro')
    const nomeFuncionario = jwt_decode(token).family_name.Nome;
    const emailFuncionario = jwt_decode(token).email;

    const [recruited, setRecruited] = useState("");
    useEffect(() => {
        EmpresaServico
        .buscarId(jwt_decode(token).family_name[1])
        .then(response => {
            setRecruited(response.data.data)

        })
    }, []);


    const listarUser = () => {
        EmpresaServico
            .buscarId(jwt_decode(token).jti[1])
            .then(response => {
                setRecruited(response.data.data)

            })
    }
console.log(recruited)

    return (
        <div>
            <Menu />

            <div className="Barra_superior">
                <p className="Titulo_perfilfunc"> Meus Dados</p>
            </div>

            <div className="teste">
                <div className="Container_totality">
                    <div className="Container_perfil">
                        <img src={Empresa}></img>
                        <div className="Barra_nome">
                            <h1>{jwt_decode(token).family_name[0]}</h1>
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
                            <h3 >Logradouro</h3>
                            <a >{recruited.logradouro}</a>
                        </div>
                        <div className="infoprofile">
                            <h3 >CNPJ</h3>
                            <a >{recruited.cnpj}</a>
                        </div>
                        <div className="infoprofile">
                            <h3 >Matriz</h3>
                            <a >{recruited.matriz}</a>
                        </div>
                        <div className="infoprofile">
                            <h3 >UF</h3>
                            <a >{recruited.uf}</a>
                        </div>
                        <div className="infoprofile">
                            <h3 >Cidade</h3>
                            <a >{recruited.cidade}</a>
                        </div>
                        {/* <div className="infoprofile">
                            <h3 >Bairro</h3>
                            <a >{recruited.bairro}</a>
                        </div>
                        <div className="infoprofile">
                            <h3 >Data Abertura</h3>
                            <a >{recruited.dataAbertura}</a>
                        </div>
                        <div className="infoprofile">
                            <h3 >Numero</h3>
                            <a >{recruited.numero}</a>
                        </div> */}
                    </div>
                </div>
                </div>

                < Rodape />
            </div>
            )
}

            export default PerfilEmpresa;

