import React from 'react';
import './CadFuncionario.css';

//pages
import { CadastroFuncio } from '../components/cadastroFuncionario';
import Menu from "../../../components/menu/menu";
import Rodape from "../../../components/rodape/rodape"
import barraNome from "../components/barraNome"
import RecrutadoServico from "../../../servicos/RecrutadoServico";


//images
import iconcadastrofuncionario from '../../../img/iconcadastrofuncionario.png'

const CadFuncionario = () => {

    return(

    //DEVE TER NOME EMAIL SENHA TELEFONE CPF RG FORMAÇÃO DATA NASCIMENTO TIPO DE USUÁRIO 

    
        <div>
        <Menu/>
        <div className="container mt-3.bg-white">
            
                
            <div className="row">
                
                <div className="col-md-5">
                    <CadastroFuncio/>
                </div>
                <div className="col-md-7">
                        <img className="img-fluid w-500" src={iconcadastrofuncionario} style={{marginTop: '90px'}} alt="" />
                    </div>
                    </div>
                
           
        </div>
        <Rodape/>
        </div>
        
    )

};

export default CadFuncionario;



