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
import  recrutadolist from '../../../assets/img/recrutadolist.png';
import information from '../../../assets/video/information.mp4'
import Listagemui from '../../../assets/img/Listagemui.png'





const ListRecrutado = () => {

    const [data, setData] = useState([]);
    const [busca, setBusca] = useState("");
    const videoSrc = information;   





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

    return (

<<<<<<< HEAD
=======
    const filteredUsuarios = data.filter( funcionario =>{
        return funcionario.nome.toLowerCase().includes( busca.toLowerCase())
     })

    return(
>>>>>>> origin/Barboza


        <div>
            <Menu />


            <div className="containerP">
                <div className="fotoetexto">
                    <img className='perfilRecrutado' src={recrutadoPerfil} alt="" />
                    <div className="Inicial">
                        <h5>Bem vindo </h5>
                        <h3>Kaua Deja</h3>

                    </div>
                </div>
            </div>

<<<<<<< HEAD
            {/* <h1>Usuarios</h1>

            <div className="wrapper">

                <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Perfil</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                {Object.values(data).map(recrutado => (
                                        <tr key={recrutado.recrutado}>
                                            <th scope="row"><img src="https://i.pravatar.cc/75?img=32"></img></th>
                                            <td>{recrutado.nome}</td>
                                            <td>{recrutado.email}</td>
                                            <td>
                
                <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
            </td>
                                        </tr>
                                    ))}
                </tbody>
                </Table>
            </div> */}
            <div id="iframe-center">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Ysf4Z_OrTqU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

           
=======
            <div className="fundotextimg">

                <div className="Completo">
                    <p>Parabens ! Voce está a um passo <br /> de se tonar um fera </p>
                    <img className = "bannerRecru" src= {Listagemui} alt="" />
                    <div className="Video">
                        <VideoPlayer src={videoSrc} width="500" height="400" />
                    </div>
                </div>
            </div>

            

           
        
        <Rodape/>
>>>>>>> origin/Barboza
        </div>


    )

};

export default ListRecrutado;