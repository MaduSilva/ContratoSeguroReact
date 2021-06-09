import React from 'react';
import './naoencontrada.css'
import Button from '@material-ui/core/Button';

const NaoEncontrada = () => {
    return (
        <div className="all">
        <div className="notfound">
           <img src="https://www.brq.com/images/logo-brq.png"/>
            <h1>PÁGINA NÃO ENCONTRADA</h1>
            <Button variant="contained" href="/">Voltar para a home</Button>

        </div>
        </div>
    )
}

export default NaoEncontrada