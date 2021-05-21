import React from 'react';
import './CadFuncionario.css';

//pages
import { CadastroFuncio } from '../components/cadastroFuncionario';
import Menu from "../../../components/menu/menu";
import barraNome from "../components/barraNome"
import RecrutadoServico from "../../../servicos/RecrutadoServico";


//images
import iconcadastrorecrutado from '../../../img/iconcadastrorecrutado.png'

const CadFuncionario = () => {

    return(

    //DEVE TER NOME EMAIL SENHA TELEFONE CPF RG FORMAÇÃO DATA NASCIMENTO TIPO DE USUÁRIO 

    
        
        <div className="container mt-3.bg-white">
            
                
            <div className="row">
                
                <div className="col-md-5">
                    <CadastroFuncio/>
                </div>
                
                    </div>
                
           
        </div>
        
        
        
    )

};

export default CadFuncionario;



