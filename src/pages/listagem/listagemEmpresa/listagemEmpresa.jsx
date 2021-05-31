import {React} from 'react';
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

//pages

import Menu from "../../../components/menu/menu";
import Rodape from "../../../components/rodape/rodape"




//images
import iconcadastroempresa from '../../../assets/img/iconcadastroempresa.png'
import iconsenai from '../../../assets/img/iconsenai.jpg'
import luccaPerfil from '../../../assets/img/luccaPerfil.jpeg'
import mariaPerfil from '../../../assets/img/mariaPerfil.jpeg'
import logosenaiperfil from '../../../assets/img/logosenaiperfil.jpeg'




const ListEmpresa = () => {

    return(


    
        <div>
            <Menu/>
        <div className="container1">
            
                
            <div className="containerP">
                   <div className="fotoetexto">
                        <img className='perfilRecrutado' src={logosenaiperfil} alt="" />
                        <div className="Inicial">
                                <h5>Bem vindo </h5>
                                <h3>Escola SENAI </h3>    
                                
                        </div>
                       
                       
                        <form className="barra" noValidate autoComplete="off">
                        <InputBase
                            className=""
                            placeholder="Pesquise um funcionario"
                            inputProps={{ 'aria-label' : 'Pesquise um funcionario' }}
                        />
                        <IconButton type="submit" className="" aria-label="search">
                            <SearchIcon />
                        </IconButton>
                            
                        </form>
                 

                    </div>
            </div>
                
                <div className="Titulo">
                    <h1>Funcionarios Cadastrados</h1>
                </div>

                <div className="listagem">
                    <img className='perfilRecrutado' src={luccaPerfil} alt="" />
                   
                   
                    <div className="info">
                        <h4>Lucca Gomes</h4>
                        
                        <div className="funcao">
                            <div className="descricao">  
                            <h6>Lucca@gmail.com </h6>
                             </div>

                             <div className="telefone">  
                            <h6>11 9999-9999 </h6>
                             </div>

                        </div>

                    </div>
                    
                </div>

                <div className="listagem">
                    <img className='perfilRecrutado' src={mariaPerfil} alt="" />
                   
                   
                    <div className="info">
                        <h4>Maria Eduarda</h4>
                        
                        <div className="funcao">
                            <div className="descricao">  
                            <h6>maria@gmail.com </h6>
                             </div>

                             <div className="telefone">  
                            <h6>11 9999-9999 </h6>
                             </div>

                        </div>

                    </div>
                    
                </div>
           
        </div>
        <Rodape/>
        </div>
        
        
    )

};

export default ListEmpresa;



