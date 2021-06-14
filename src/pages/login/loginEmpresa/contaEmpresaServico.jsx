import http from '../../../utils/http-axios';

const logar = dados => {
    return http.post('account/company/signin',  JSON.stringify(dados));
}

export default {
    logar,
}