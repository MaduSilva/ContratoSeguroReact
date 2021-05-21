import http from '../../../utils/http-axios';

const logar = dados => {
    return http.post('account/company/signin', dados);
}

export default {
    logar,
}