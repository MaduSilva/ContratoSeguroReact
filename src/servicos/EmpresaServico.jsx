import http from '../utils/http-axios';

const cadastrar = dados => {
    return fetch("https://localhost:5001/v1/account/company/signup", {
        method:'POST',
        body : JSON.stringify(dados),
        headers : {
            'content-type' : 'application/json'
        }
    })
}


const buscarId = id => {
    return http.get('/account/company/profile-company/' + id)
}
const alterarSenha = dados => {
    return http.put('/account/users/update-password', JSON.stringify(dados), {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('token-contratoseguro')}`
        }
    });
}


export default {
    cadastrar,
    buscarId,
    alterarSenha
}