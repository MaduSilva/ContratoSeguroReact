import { React, useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import './listagemEmpresa.css';
import recrutadoPerfil from '../../../assets/img/recrutadoperfil.PNG'

import EmpresaServico from '../../../servicos/EmpresaServico'
import jwt_decode from 'jwt-decode';


//pages

import Menu from "../../../components/menu/menu";
import Rodape from "../../../components/rodape/rodape"
import freeperfil from "../../../assets/img/freeperfil.png";


//alert
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


//images
import iconcadastroempresa from '../../../assets/img/iconcadastroempresa.png'
import iconsenai from '../../../assets/img/iconsenai.jpg'
import luccaPerfil from '../../../assets/img/luccaPerfil.jpeg'
import mariaPerfil from '../../../assets/img/mariaPerfil.jpeg'
import logosenaiperfil from '../../../assets/img/logosenaiperfil.jpeg'
import fundoListagem from '../../../assets/img/fundoListagem.png'
import { useToasts } from 'react-toast-notifications';


import FuncionarioServico from '../../../servicos/FuncionarioServico'


const ListEmpresa = () => {
    const { addToast } = useToasts();
    const token = localStorage.getItem('token-contratoseguro')
    const nomeEmpresa = jwt_decode(token).family_name[0];;
    const [data, setData] = useState([]);
    const [busca, setBusca] = useState("");
    const [usuario, setUsuario] = useState("");


    useEffect(() => {
        listarUser()
    }, []);

    const listarUser = () => {
        EmpresaServico
            .buscarId(jwt_decode(token).jti[0])
            .then(response => {
                setUsuario(response.data.data)

            })
    }




    const getFuncionario = async () => {
        fetch("https://localhost:5001/v1/account/employee/lister-employee")
            .then((response) => response.json())
            .then((responseJson) => (
                console.log(responseJson),
                setData(responseJson.data)
            ));
    }


    useEffect(() => {
        getFuncionario();
    }, [])

    const remover = (id) => {
        confirmAlert({
            title: 'Remover Usuário',
            message: 'Deseja excluir o usuário?',
            buttons: [
                {
                    label: 'Não'
                },
                {
                    label: 'Sim',
                    onClick: () => {
                        FuncionarioServico
                            .remover(id)
                            .then(resultado => {
                                addToast(resultado.data.mensagem, {
                                    appearance: 'success',
                                    autoDismiss: true,
                                })
                                getFuncionario();
                            })
                            .catch(resultado => {
                                addToast(resultado.data.mensagem, {
                                    appearance: 'error',
                                    autoDismiss: true,
                                })
                            })
                    }
                }
            ]
        });
    }

    const filteredFuncionarios = data.filter(funcionario => {
        return funcionario.nome.toLowerCase().includes(busca.toLowerCase())
    })


    return (



        <div>
            <Menu />
            <div className="containerP">
                <div className="fotoetexto">
                    <img className='perfilRecrutado' src={usuario.urlFoto} alt="" />
                    <div className="Inicial">
                        <h5>Bem vindo </h5>
                        <h3>{jwt_decode(token).family_name[0]}</h3>

                    </div>
                </div>
            </div>

            <div className="titulo_situacao">
                <p>Funcionarios Cadastrados</p>
            </div>

            <div className="container-list">
                <section>
                    <form className="inputcompleto">

                        <input
                            type="text"
                            className="ml-50 mt-3 rounded-md p-2 imputpesquisa"
                            placeholder="Digite o nome do recrutado"
                            onChange={e => setBusca(e.target.value)}
                        />

                    </form>
                </section>


                <div key={data} className="bg-gray listrecrutados">

                    <section className="recrutadostt pb-5">

                        <div className="container">
                            <div className="row">
                                {Object.values(filteredFuncionarios).map(funcionario => (
                                    <div className="col-md-3 col-sm-5  text-center">
                                        <div className="completo_card">
                                            <div className="avtar">
                                                <img className="img-fluid" src={funcionario.urlFoto} alt="" />
                                            </div>

                                            <div className="box_content">
                                                <h3 className="title">{funcionario.nome}</h3>
                                                <span className="post">{funcionario.email}</span>

                                            </div>

                                            <ul className="icons">
                                                <li>
                                                    <a href="#deleteEmployeeModal" className="remover" onClick={() => remover(funcionario.id)} data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                                                </li>

                                            </ul>

                                        </div>
                                    </div>




                                ))}
                            </div>

                        </div>


                    </section>


                </div>

            </div>


            <Rodape />
        </div>



    )

};

export default ListEmpresa;



