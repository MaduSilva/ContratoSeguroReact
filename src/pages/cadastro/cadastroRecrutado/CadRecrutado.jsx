//react
import React from 'react';
import './CadRecrutado.css';

//pages
import { CadastroRec } from '../components/cadastros/cadastroRecrutado';
import Menu from "../../../components/menu/menu";

//images
import iconcadastrorecrutado from '../../../assets/img/iconcadastrorecrutado.png'

const CadRecrutado = () => {

    return(
        <div>

        <Menu/>

    
        
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
        
        </div>
        
    )

};

export default CadRecrutado;



