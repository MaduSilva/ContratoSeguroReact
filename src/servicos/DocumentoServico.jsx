import http from '../utils/http-axios';
import axios from "axios";

const listar = dados => {
    return http.get('docusigns', JSON.stringify(dados), {
        headers : {
            'authorization' : `Bearer ${localStorage.getItem('token-contratoseguro')}`
        }
    });
}

const enviar = dados => {
    return http.post('docusigns', JSON.stringify(dados), {
        headers : {
            'authorization' : `Bearer ${localStorage.getItem('token-contratoseguro')}`
        }
    });
}


export default {
    listar,
    enviar,
}
