import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './textField'
import '../cadastroRecrutado/index.css'
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import { blue } from '@material-ui/core/colors';
import {  withStyles } from '@material-ui/core/styles';
import FuncionarioServico from "../../../servicos/FuncionarioServico";

export const CadastroFuncio = () => {

      
    const validate= Yup.object({
        nome: Yup.string()
            .max(100, 'Mais de 100 carcteries')
            .required('Required'),
        email: Yup.string()
            .max(30, 'Mais de 15 carcteries')
            .required('email is Required'),
        cpf: Yup.string()
            .max(15, 'Mais de 15 carcteries')
            .required('cpf is Required'),
        senha: Yup.string()
            .max(15, 'Mais de 15 carcteries no CPF')
            .required('senha is Required'),
    })
    return(
        
        <Formik
            initialValues={{
                nome: '',
                email: '',
                senha: '',
                telefone:'',
                cpf: '',
                rg :'',
                formacao :'',
                data:'',
                tipoUsuario: '2',
                
            }}
            validationSchema={validate}
            onSubmit={values => {
                alert(JSON.stringify(values))
                FuncionarioServico
                    .cadastrar(values)
                    .then(resultado => resultado.json())
                    .then(resultado => {
                        console.log(JSON.stringify(resultado))
                        alert('Usuário Cadastrado, confira email')
                    })
                    .catch(erro => {
                        console.error(" Erro na api " + erro);
                    })
            }}
        >
            {formik => (
                <div>
                    <h1 className="my-3 font-weight-bold-display-7">Cadastro de Funcionario </h1>
                    
                    <Form className='imputs'>
                        <TextField label="Nome" name="nome" type="text" />
                        <TextField label="Email" name="email" type="email" />
                        <TextField label="Senha" name="senha" type="password" />
                        <TextField label="Telefone" name="telefone" type="text" />
                        <TextField label="CPF" name="cpf" type="cpf" />
                        <TextField label="RG" name="rg" type="text" />
                        <TextField label="Formação" name="formacao" type="text" />
                        <TextField
                            id="date"
                            label="Birthday"
                            name="data"
                            type="date"
                            
                            defaultValue="2017-05-24"
                           
                        />
  

                        
                        
                        
                        
                        <div className="botoes">
                        <button className="btn btn-dark mt-3" type="reset" >Cancelar</button>
                        <button className="btn btn-primary mt-3" type="submit" value='Submit' >Cadastrar</button>
                            
                        </div>
                    </Form>
                </div>
            )}
        </Formik>
            
        
    )
}