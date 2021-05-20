const cadastrar = dados => {
    return fetch("https://192.168.0.3:5001/api/account/employee/signup", {
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