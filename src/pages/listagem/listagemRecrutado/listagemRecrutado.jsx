import { React, useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import './listagemRecrutado.css';
import recrutadoPerfil from '../../../assets/img/recrutadoperfil.PNG'
import VideoPlayer from 'react-video-js-player';


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
import RecrutadoServico from "../../../servicos/RecrutadoServico";

//pages

import Menu from "../../../components/menu/menu";
import Rodape from "../../../components/rodape/rodape"




//Assets
import iconcadastroempresa from '../../../assets/img/iconcadastroempresa.png';
import { Toast } from 'bootstrap';
import recrutadolist from '../../../assets/img/recrutadolist.png';
import information from '../../../assets/video/information.mp4'
import Listagemui from '../../../assets/img/Listagemui.png'

//jwt
import jwt_decode from 'jwt-decode'




const ListRecrutado = () => {

    const [data, setData] = useState([]);
    const [busca, setBusca] = useState("");
    const videoSrc = information;
    const token = localStorage.getItem('token-contratoseguro')




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

    const filteredUsuarios = data.filter(funcionario => {
        return funcionario.nome.toLowerCase().includes(busca.toLowerCase())
    })

    return (



        <div>
            <Menu />


            <div className="containerP">
                <div className="fotoetexto">
                    <img className='perfilRecrutado' src={recrutadoPerfil} alt="" />
                    <div className="Inicial">
                        <h5>Bem vindo </h5>
                        <h3>{jwt_decode(token).family_name[0]}</h3>

                    </div>
                </div>
            </div>

            <div className="container completo">
                <div className="fundotextimg">

                    <div className="Completo">

                        <p>Parabéns! Você está a um passo <br /> de se tornar um fera BRQ </p>
                        <img className="bannerRecru" src={Listagemui} alt="" />

                        <div className="Video">
                            <VideoPlayer src={videoSrc} width="500" height="400" />
                        </div>
                    </div>
                </div>
                <div className="card">

                    <div class="containercards">
                        <img id="cardimg" src="https://blog.brq.com/wp-content/uploads/2021/06/1.jpg" alt="Imagem de capa do card" class="image" />
                        <div class="overlay">
                            <div class="text">Lorem ipsum dolor, sit amet consectetur adipisicing </div>
                        </div>
                    </div>

                    <div class="containercards">
                        <img id="cardimg" src="https://blog.brq.com/wp-content/uploads/2021/05/intelligent-business-automation.jpg" alt="Imagem de capa do card" class="image" />
                        <div class="overlay">
                            <div class="text">Lorem ipsum dolor, sit amet consectetur adipisicing</div>
                        </div>
                    </div>

                    <div class="containercards">
                        <img id="cardimg" src="https://blog.brq.com/wp-content/uploads/2021/05/aplicacoes-de-intelligent-business-automation.jpg" alt="Imagem de capa do card" class="image" />
                        <div class="overlay">
                            <div class="text">Lorem ipsum dolor, sit amet consectetur adipisicing </div>
                        </div>
                    </div>


                </div>


            </div>

            <Rodape />
        </div>


    )

};

export default ListRecrutado;