import axios from "axios"

const cadastrar = dados => {
    return fetch("https://localhost:5001/v1/account/employee/signup", {
        method:'POST',
        body : JSON.stringify(dados),
        headers : {
            'content-type' : 'application/json'
        }
    })
}

const deletar = dados => {
    return fetch("https://localhost:5001/v1/account/recruited/delete-recruited", {
        method:'DELETE',
        body : JSON.stringify(dados),
        headers : {
            'content-type' : 'application/json'
        }
    })
}


export default {
    cadastrar
}