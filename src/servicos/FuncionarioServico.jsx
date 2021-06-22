import http from '../utils/http-axios';
import axios from "axios";

const listar = dados => {
    return http.get('account/employee/lister-employee', JSON.stringify(dados), {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('token-contratoseguro')}`
        }
    });
}

const cadastrar = dados => {
    return http.post('account/employee/signup', JSON.stringify(dados), {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('token-contratoseguro')}`
        }
    });
}

const remover = async id => {
    return await axios({
        method: 'DELETE',
        url: 'https://localhost:5001/v1/account/employee/delete-employee',
        data: {
            idFuncionario: id,
        },
        headers: {
            'authorization': `Bearer ${localStorage.getItem('token-contratoseguro')}`
        }
    })
}

const buscarId = id => {
    return http.get('/account/employee/profile-employee/' + id)
}

const alterarSenha = dados => {
    return http.put('/account/users/update-password', JSON.stringify(dados), {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('token-contratoseguro')}`
        }
    });
}



export default {
    listar,
    cadastrar,
    remover,
    buscarId,
    alterarSenha
}
