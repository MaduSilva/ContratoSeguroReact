import { React, useState, useEffect } from 'react';
import './listagemRecrutado.css';
import FuncionarioImg from '../../../assets/img/avatar.jpg'
import VideoPlayer from 'react-video-js-player';
import Menu from "../../../components/menu/menu";
import Rodape from "../../../components/rodape/rodape"
import information from '../../../assets/video/information.mp4'
import Listagemui from '../../../assets/img/Listagemui.png'
import jwt_decode from 'jwt-decode'
import RecrutadoServico from '../../../servicos/RecrutadoServico';


const ListRecrutado = () => {

    const [data, setData] = useState([]);
    const [busca, setBusca] = useState("");
    const videoSrc = information;
    const token = localStorage.getItem('token-contratoseguro')
    const [usuario, setUsuario] = useState("");

    const getRecrutados = async () => {
        fetch("https://localhost:5001/v1/account/recruited/lister-recruited")
            .then((response) => response.json())
            .then((responseJson) => (
                console.log(responseJson),
                setData(responseJson.data)
            ));
    }

    useEffect(() => {
        listarUser()
    }, []);

    const listarUser = () => {
        RecrutadoServico
            .buscarId(jwt_decode(token).jti[0])
            .then(response => {
                setUsuario(response.data.data)

            })
    }


    useEffect(() => {
        getRecrutados();
    }, [])

   
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

            <div className="container completo">
                <div className="fundotextimg">

                    <div className="Completo">

                        <p>Parabéns! Você está a um passo <br /> de se tornar um fera BRQ </p>
                        <img className="bannerRecru" src={Listagemui} alt="" />

                        <div className="Video">
                            <VideoPlayer src={videoSrc} width="400" height="400" />
                        </div>

                    </div>
                 
                    </div>
                    
                
            </div>

            

            <Rodape />
        </div>


    )

};

export default ListRecrutado;