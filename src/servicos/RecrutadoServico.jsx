import http from '../utils/http-axios';

const listar = dados => {
    return http.get('account/recruited/lister-recruited', JSON.stringify(dados), {
        headers : {
            'authorization' : `Bearer ${localStorage.getItem('token-contratoseguro')}`
        }
    });
}

const cadastrar = dados => {
    return http.post('account/recruited/signup-recruited', JSON.stringify(dados), {
        headers : {
            'authorization' : `Bearer ${localStorage.getItem('token-contratoseguro')}`
        }
    });
}



export default {
    listar,
    cadastrar,
}
