import React from 'react';
import './index.css';

//pages
import { CadastroRec } from '../components/cadastroRecrutado';
import Menu from "../../../components/menu/menu";
import barraNome from "../components/barraNome"
import RecrutadoServico from "../../../servicos/RecrutadoServico";


//images
import iconcadastrorecrutado from '../../../img/iconcadastrorecrutado.png'

const CadRecrutado = () => {

    return(


    
        
        <div className="container mt-3.bg-white">
            
                
            <div className="row">
                
                <div className="col-md-5">
                    <CadastroRec/>
                </div>
                
                    <div className="col-md-7">
                        <img className="img-fluid w-500" src={iconcadastrorecrutado} alt="" />
                    </div>
                    </div>
                
           
        </div>
        
        
        
    )

};

export default CadRecrutado;



