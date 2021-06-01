import {React} from 'react';
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




//images
import iconsenai from '../../assets/img/iconsenai.jpg'
import luccaPerfil from '../../assets/img/luccaPerfil.jpeg'
import mariaPerfil from '../../assets/img/mariaPerfil.jpeg'
import logosenaiperfil from '../../assets/img/logosenaiperfil.jpeg'




const DashbordFuncionario = () => {

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
                       
                       
                        <form className="barra" noValidate autoComplete="off">
                        <InputBase
                            className="pesquisa"
                            placeholder="Pesquise um recrutado"
                            inputProps={{ 'aria-label' : 'Pesquise um Recrutado' }}
                        />
                        <IconButton type="submit" className="" aria-label="search">
                            <SearchIcon />
                        </IconButton>
                            
                        </form>
                 

                    </div>
            </div>
                
                <div className="Titulo">
                    <h1>Situação dos recrutados</h1>
                </div>

                <div className="grafico">

                <Chart/>

                <div className="totalnumero">
                <h3>Recrutados com sucesso : 112</h3>
                <h3>Recrutados com pendências : 72</h3>
                <h3>Recrutados a serem avaliados : 25 </h3>
                
                </div>

                </div>


                <div className="Titulo">
                    <h1>Recrutados Cadastrados</h1>
                </div>

                <div className="listagem">
                    <img className='perfilRecrutado' src={mariaPerfil} alt="" />
                   
                
                   
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
                    <img className='perfilRecrutado' src={luccaPerfil} alt="" />
                   
                   
                    <div className="info">
                        <h4>Lucca</h4>
                        
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

export default DashbordFuncionario;



