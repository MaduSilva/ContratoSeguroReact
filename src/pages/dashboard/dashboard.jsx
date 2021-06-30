import { React, useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import './dashboard.css';
import recrutadoPerfil from '../../assets/img/recrutadoperfil.PNG'


import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

//pages
import Menu from "../../components/menu/menu";
import Rodape from "../../components/rodape/rodape"
import Chart from '../../components/charts/BarChats'
import ContactCards from "../../pages/dashboard/ContactCards";

//alert
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


//images
import iconsenai from '../../assets/img/iconsenai.jpg'
import luccaPerfil from '../../assets/img/luccaPerfil.jpeg'
import mariaPerfil from '../../assets/img/mariaPerfil.jpeg'
import logosenaiperfil from '../../assets/img/logosenaiperfil.jpeg'
import { Search } from '@material-ui/icons';
import jwt_decode from 'jwt-decode';
import RecrutadoServico from '../../servicos/RecrutadoServico';
import fundoDashboard from '../../assets/img/fundoDashboard.png';
import freeperfil from "../../assets/img/freeperfil.png";
import { useToasts } from 'react-toast-notifications';

const token = localStorage.getItem('token-contratoseguro')


const DashbordFuncionario = () => {
    const { addToast } = useToasts();
    const [data, setData] = useState([]);
    const [busca, setBusca] = useState("");



    const getRecrutados = async () => {
        fetch("https://localhost:5001/v1/account/recruited/lister-recruited")
            .then((response) => response.json())
            .then((responseJson) => (
                console.log(responseJson),
                setData(responseJson.data)
            ));
    }


    useEffect(() => {
        getRecrutados();
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
                        RecrutadoServico
                            .remover(id)
                            .then(resultado => {
                                addToast(resultado.data.mensagem, {
                                    appearance: 'success',
                                    autoDismiss: true,
                                })
                                getRecrutados();
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


    const filteredRecrutados = data.filter(recrutado => {
        return recrutado.nome.toLowerCase().includes(busca.toLowerCase())
    })

    return (

        <div>
            <Menu />
            <div className="col boasVindas">
                <img className='perfildashboard' src={mariaPerfil} alt="" />
                <p> Bem vindo {jwt_decode(token).given_name} !</p>



            </div>

            <div className="titulo_situacao">
                <h4>Situação dos Recrutados</h4>
            </div>
            <div className="container ">

                <div className="row complet">

                    <div className="col-20 col-sm-5 col-md-2 grafico ">
                        <Chart />
                    </div>

                    <div className="row imagetext">
                        <div className="cardsresponsivo">
                            <div className="col-20 cards_das">
                                <div className="Pendencias">
                                    <h8>Pendentes</h8>
                                    <p>62</p>
                                </div>

                                <div className="Sucesso">
                                    <h8>Sucesso</h8>
                                    <p>70</p>
                                </div>

                                <div className="Analise">
                                    <h8>Analises</h8>
                                    <p>87</p>
                                </div>
                            </div>
                        </div>

                        <div className="col imgdash">
                            <img className='fundodashboard' src={fundoDashboard} alt="" />
                        </div>

                    </div>


                </div>




            </div>

            <div className="titulo">
                <p>Recrutados cadastrados</p>

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
                                {Object.values(filteredRecrutados).map(recrutado => (
                                    <div className="col-md-3 col-sm-5  text-center">
                                        <div className="completo_card">
                                            <div className="avtar">
                                                <img  style={{ width : '120px'}}  src={recrutado.urlFoto} alt="" />
                                            </div>

                                            <div className="box_content">
                                                <h3 className="title">{recrutado.nome}</h3>
                                                <span className="post">{recrutado.email}</span>
                                            </div>

                                            <ul className="icons">
                                                <li>
                                                    <a href="#deleteEmployeeModal" className="remover" onClick={() => remover(recrutado.id)} data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"></i></a>

                                                    <a href="/funcionario/documentos"><i className="material-icons" data-toggle="tooltip" title="Chat"></i></a>
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

export default DashbordFuncionario;



