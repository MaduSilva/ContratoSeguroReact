import http from '../../../utils/http-axios';

const alterarsenha = dados => {
    return http.post('account/signin', dados);
}

export default {
    alterarsenha,
}