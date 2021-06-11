import http from '../../utils/http-axios';

const logar = dados => {
    return http.post('account/signin', dados);
}

export default {
    logar,
}