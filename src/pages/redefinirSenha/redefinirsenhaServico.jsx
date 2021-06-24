import http from '../../../utils/http-axios';

const redefinir = dados => {
    return http.post('/v1/account/users/reset-password',  JSON.stringify(dados));
}

export default {
    redefinir,
}