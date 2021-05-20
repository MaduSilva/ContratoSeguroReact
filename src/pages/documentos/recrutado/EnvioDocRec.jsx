import React from 'react';
import Menu from '../../../components/menu/menu'
import Rodape from '../../../components/rodape/rodape'
import '../recrutado/EnvioDocRec.css'

const EnvioDocRec = () => {
    return (
        <div>
            <Menu />
           <div className="faixaazul">
               <h2>Confirmação dos documentos</h2>
           </div>
            <h2>Adicionar Documentos</h2>
            <Rodape />
        </div>
    )

}

export default EnvioDocRec;