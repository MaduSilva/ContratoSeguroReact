import http from '../../../utils/http-axios';

const logar = dados => {
    return http.post('/account/recruited/signin', JSON.stringify(dados));
}

export default {
    logar,
}