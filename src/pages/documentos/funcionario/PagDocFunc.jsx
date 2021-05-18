import React from 'react';
import Menu from '../../../components/menu/menu'
import Rodape from '../../../components/rodape/rodape'
import DocFuncionario from './DocFuncionario';

const PagDocFunc = () => {
    return (
        <div>
            <Menu />
            <DocFuncionario/>
            <Rodape />
        </div>
    )

}

export default PagDocFunc;