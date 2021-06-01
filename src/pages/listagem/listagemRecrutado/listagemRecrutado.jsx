import {React} from 'react';
import  './listagemRecrutado.css';
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




const ListRecrutado = () => {

    return(


    
        <div>
            <Menu/>
        <div className="container1">
            
                
            <div className="containerP">
                   <div className="fotoetexto">
                        <img className='perfilRecrutado' src={recrutadoPerfil} alt="" />
                        <div className="Inicial">
                                <h5>Bem vindo </h5>
                                <h3>Kaua Deja</h3>    
                                
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
                    <h1>Usúarios</h1>
                </div>

                <div className="listagem">
                    <img className='perfilRecrutado' src={recrutadoPerfil} alt="" />
                   
                   
                    <div className="info">
                        <h4>Maria</h4>
                        
                        <div className="funcao">
                            <div className="descricao">  
                            <h6>Desenvolvedora Backend</h6>
                            

                            <div className="buttom">
                            
                            <IconButton aria-label="ChatBubbleOutlineIcon">
                                <ChatBubbleOutlineIcon />
                            </IconButton>

                            <IconButton aria-label="NotificationsActiveIcon">
                                <NotificationsActiveIcon />
                            </IconButton>
                            
                            </div>
                            
                            
                            </div>


                            

                        

                        </div>

                    </div>
                    
                </div>

                <div className="listagem">
                    <img className='perfilRecrutado' src={recrutadoPerfil} alt="" />
                   
                   
                    <div className="info">
                        <h4>Nicolas</h4>
                        
                        <div className="funcao">
                            <div className="descricao">  
                            <h6>Desenvolvedor Mobile</h6>
                            

                            <div className="buttom">
                            
                            <IconButton aria-label="ChatBubbleOutlineIcon">
                                <ChatBubbleOutlineIcon />
                            </IconButton>

                            <IconButton aria-label="NotificationsActiveIcon">
                                <NotificationsActiveIcon />
                            </IconButton>
                            
                            </div>
                            
                            
                            </div>


                            

                        

                        </div>

                    </div>
                    
                </div>
           
        </div>
        <Rodape/>
        </div>
        
        
    )

};

export default ListRecrutado;



