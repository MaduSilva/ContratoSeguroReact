const cadastrar = dados => {
    return fetch("https://localhost:44312/api/account/company/signup", {
        method:'POST',
        body : JSON.stringify(dados),
        headers : {
            'content-type' : 'application/json'
        }
    })
}

export default {
    cadastrar
}