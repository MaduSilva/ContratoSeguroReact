import {React , useState , useEffect} from 'react';
import { Table } from 'react-bootstrap';
import  './dashboard.css';
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
import Chart from '../../components/chats/BarChats'

//alert
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


//images
import iconsenai from '../../assets/img/iconsenai.jpg'
import luccaPerfil from '../../assets/img/luccaPerfil.jpeg'
import mariaPerfil from '../../assets/img/mariaPerfil.jpeg'
import logosenaiperfil from '../../assets/img/logosenaiperfil.jpeg'
import { Search } from '@material-ui/icons';

import RecrutadoServico from '../../servicos/RecrutadoServico'


const DashbordFuncionario = () => {

    const [data, setData] = useState([]);
<<<<<<< HEAD
=======
    const [busca, setBusca] = useState("");


>>>>>>> origin/Barboza

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
                            .then(() => {
                                alert("Usuário Removido");
                                getRecrutados();
                            })
                            .catch(erro => {
                                console.log(`erro ${erro}`);
                            })
                    }
                }
            ]
        });
    }


    const filteredRecrutados = data.filter( recrutado => {
       return recrutado.nome.toLowerCase().includes( busca.toLowerCase() )
    }) 

    return(


    
        <div>
            <Menu/>
        <div className="container1">
            
                
            <div className="containerP">
                   <div className="fotoetexto">
                        <img className='perfilRecrutado' src={mariaPerfil} alt="" />
                        <div className="Inicial">
                                <h5>Bem vinda </h5>
                                <h2>Maria </h2>    
                                
                        </div>

                        
                 

                    </div>
                </div>
                
                <div className="Titulo">
                    <h1>Situação dos recrutados</h1>
                </div>

                <div className="Graficos">

                <div className="grafico">

                <Chart/>

                

                <div className="cards">

                    <div className="Pendencias">
                        <h8>Pendencias</h8>
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
                
                </div>

                


                <div className="Titulo">
                    <h1>Recrutados Cadastrados</h1>
                </div>
                

                

                <div className="wrapper">


                    <div className="procurar">
                    <h7>Busque um recrutado : </h7>
                    <input type="text" placeholder="Digite o nome do recrutado" onChange={ e=> setBusca(e.target.value) } ></input>
                    </div>


            <Table striped bordered hover size="sm">
            
            
            <thead>
                <tr>
                <th>Perfil</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Ação</th>
                </tr>
            </thead>
            <tbody>
<<<<<<< HEAD
            {data.map(recrutado => (
=======
            {Object.values(filteredRecrutados).map(recrutado => (
>>>>>>> origin/Barboza
                                    <tr key={recrutado.recrutado}>
                                        <th scope="row"><img id="avatarimg" src="https://i.pravatar.cc/75?img=32"></img></th>
                                        <td>{recrutado.nome}</td>
                                        <td>{recrutado.email}</td>
                                        <td>

            <a href="#deleteEmployeeModal" className="remover" onClick={() => remover(recrutado.id)} data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
            </td>
                                    </tr>
                                ))}
            </tbody>
            </Table>
            </div>
           
        </div>
        <Rodape/>
        </div>
        
        
    )

};

export default DashbordFuncionario;



