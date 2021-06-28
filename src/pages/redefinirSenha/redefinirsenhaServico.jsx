import http from '../../utils/http-axios';

const redefinir = dados => {
    return http.put('/account/users/reset-password', JSON.stringify(dados));
}

export default {
    redefinir,
}