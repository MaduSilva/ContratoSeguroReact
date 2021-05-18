import React from 'react';
import { ErrorMessage , useField } from 'formik';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const barraNome = () => {
    
    
    return(
        <div className="namePage">
            <ExpandMoreIcon></ExpandMoreIcon>
            <h1 className="my-3 font-weight-bold-display-7">Cadastro de Recrutado </h1>
        
        </div>
    )
}