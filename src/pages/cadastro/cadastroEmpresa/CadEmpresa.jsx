import React from 'react';
import './CadEmpresa.css';

//pages
import { CadastroEmpresa } from '../components/cadastroEmpresa';
import Menu from "../../../components/menu/menu";
import Rodape from "../../../components/rodape/rodape"
import barraNome from "../components/barraNome"



//images
import iconcadastroempresa from '../../../img/iconcadastroempresa.png'

const CadEmpresa = () => {

    return(


    
        <div>
            <Menu/>
        <div className="container mt-3.bg-white">
            
                
            <div className="row">
                
                <div className="col-md-5">
                    <CadastroEmpresa/>
                </div>
                <div className="col-md-7">
                        <img className="img-fluid w-500" src={iconcadastroempresa} style={{marginTop: '90px'}} alt="" />
                    </div>
                    </div>
                
           
        </div>
        <Rodape/>
        </div>
        
        
    )

};

export default CadEmpresa;



