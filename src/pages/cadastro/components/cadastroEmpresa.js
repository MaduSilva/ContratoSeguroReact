import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './textField'
import '../cadastroRecrutado/index.css'
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import { blue } from '@material-ui/core/colors';
import {  withStyles } from '@material-ui/core/styles';
import EmpresaServico from "../../../servicos/EmpresaServico";

export const CadastroEmpresa = () => {

      
    const validate= Yup.object({
        nome: Yup.string()
            .max(30, 'Mais de 100 carcteries')
            .required('Required'),
        email: Yup.string()
            .max(30, 'Mais de 15 carcteries')
            .required('email is Required'),
        senha: Yup.string()
            .max(15, 'Mais de 15 carcteries no CPF')
            .required('senha is Required'),
    })
    return(
        
        <Formik
            initialValues={{
                nome: '',
                email: '',
                senha : '',
                telefone : '',
                cnpj : '',
                tipoUsuario : '3',
                razaoSocial : '',
                matriz : '',
                logradouro : '',
                uf : '',
                cidade : '',
                numero : '',
                bairro : '',
                dataAbertura : '',
                
            }}
            validationSchema={validate}
            onSubmit={values => {
                alert(JSON.stringify(values))
                EmpresaServico
                    .cadastrar(values)
                    .then(resultado => resultado.json())
                    .then(resultado => {
                        console.log(JSON.stringify(resultado))
                    })
                    .catch(erro => {
                        console.error(" Erro na api " + erro);
                    })
            }}
        >
            {formik => (
                <div>
                    <h1 className="my-3 font-weight-bold-display-7">Cadastro de Empresa  </h1>
                    
                    <Form className='imputs'>
                        <TextField label="Nome" name="nome" type="text" />
                        <TextField label="Email" name="email" type="email" />
                        <TextField label="Senha" name="senha" type="password" />
                        <TextField label="Telefone" name="telefone" type="text" />
                        <TextField label="CNPJ" name="cnpj" type="cnpj" />
                        <TextField label="Razão Social" name="razaoSocial" type="text" />
                        <TextField label="Matriz" name="matriz" type="text" />
                        <TextField label="Logradouro" name="logradouro" type="text" />
                        <TextField label="UF" name="uf" type="text" />
                        <TextField label="Cidade" name="cidade" type="text" />
                        <TextField label="Numero" name="numero" type="text" />
                        <TextField label="Bairro" name="bairro" type="text" />
                        <TextField
                            id="date"
                            name= "dataAbertura"
                            label="Data de Abertura"
                            type="datetime-local"
                            
                            
                           
                        />
  

                        
                        
                        
                        
                        <div className="botoes">
                        <button className="btn btn-dark mt-3" type="reset" >Cancelar</button>
                        <button className="btn btn-primary mt-3" type="submit" value='Submit'>Enviar</button>
                            
                        </div>
                    </Form>
                </div>
            )}
        </Formik>
            
        
    )
}