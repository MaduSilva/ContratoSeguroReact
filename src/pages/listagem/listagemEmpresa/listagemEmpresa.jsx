import {React , useState , useEffect} from 'react';
import { Table } from 'react-bootstrap';
import  './listagemEmpresa.css';
import recrutadoPerfil from '../../../assets/img/recrutadoperfil.PNG'

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
import jwt_decode from 'jwt-decode';


//pages

import Menu from "../../../components/menu/menu";
import Rodape from "../../../components/rodape/rodape"


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


import FuncionarioServico from '../../../servicos/FuncionarioServico'


const ListEmpresa = () => {
    const token = localStorage.getItem('token-contratoseguro')
    const nomeEmpresa = jwt_decode(token).family_name[0];;
    const [data, setData] = useState([]);
    const [busca, setBusca] = useState("");




    const getFuncionario = async () =>{
        fetch("https://localhost:5001/v1/account/employee/lister-employee")
        .then((response) => response.json())
        .then((responseJson) => (
            console.log(responseJson),
            setData(responseJson.data)
        ));
    }


    useEffect(() =>{
        getFuncionario();
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
                        FuncionarioServico
                        .remover(id)
                            .then(() => {
                                alert("Usuário Removido");
                                getFuncionario();
                            })
                            .catch(erro => {
                                console.log(`erro ${erro}`);
                            })
                    }
                }
            ]
        });
    }

   const filteredFuncionarios = data.filter( funcionario =>{
     return funcionario.nome.toLowerCase().includes( busca.toLowerCase())
  })


    return(


        <div>
        
            <Menu/>
       
            
                
            <div className="containerP">
                   <div className="fotoetexto">
                        <img className='perfilRecrutado' src={logosenaiperfil} alt="" />
                        <div className="Inicial">
                                <h5>Bem vindo </h5>
                                <h3>{nomeEmpresa} </h3>    
                                
                        </div>
                    </div>
            </div>
            <div className="procurar">
                    <h7>Busque um funcionario : </h7>
                    <input type="text" placeholder="Digite o nome do funcionario" onChange={ e=> setBusca(e.target.value) } ></input>
                    </div>

                        <h1>Funcionários Cadastrados</h1>
                    <div className="wrapper">

                 

                    <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Perfil</th>
                        <th>Nome</th>
                        <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                    {Object.values(filteredFuncionarios).map(recrutado => (
                                            <tr key={recrutado.recrutado}>
                                                <th scope="row"><img id="avatarimagem" src="https://i.pravatar.cc/75?img=59"></img></th>
                                                <td>{recrutado.nome}</td>
                                                <td>

                                                <a href="#deleteEmployeeModal" className="remover" onClick={() => remover(recrutado.id)} data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                    </td>
                                            </tr>
                                        ))}
                    </tbody>
                    </Table>

                  

                    </div>

                  
                       
                
        <Rodape/>
        </div>
        
        
        
    )

};

export default ListEmpresa;



