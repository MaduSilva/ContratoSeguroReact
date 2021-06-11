import http from '../../../utils/http-axios';

const logar = dados => {
    return http.post('/account/employee/signin', JSON.stringify(dados));
}

export default {
    logar,
}