import React from 'react';
import './CadEmpresa.css';

//pages
import { CadastroEmpresa } from '../components/cadastroEmpresa';
import Menu from "../../../components/menu/menu";
import barraNome from "../components/barraNome"



//images
import iconcadastrorecrutado from '../../../img/iconcadastrorecrutado.png'

const CadEmpresa = () => {

    return(


    
        
        <div className="container mt-3.bg-white">
            
                
            <div className="row">
                
                <div className="col-md-5">
                    <CadastroEmpresa/>
                </div>
                
                    </div>
                
           
        </div>
        
        
        
    )

};

export default CadEmpresa;



