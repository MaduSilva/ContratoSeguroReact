import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './textField'
import '../cadastroRecrutado/index.css'
import * as Yup from 'yup';

export const CadastroRec = () => {
    const validate= Yup.object({
        nome: Yup.string()
            .max(15, 'Mais de 15 carcteries')
            .required('Required'),
        email: Yup.string()
            .max(15, 'Mais de 15 carcteries')
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
                cpf: '',
                senha: '',
            }}
            validationSchema={validate}
            onSubmit={values => {
                console.log(values)
            }}
        >
            {formik => (
                <div>
                    <h1 className="my-3 font-weight-bold-display-7">Cadastro de Recrutado </h1>
                    
                    <Form className='imputs'>
                        <TextField label="Nome" name="nome" type="text" />
                        <TextField label="Email" name="email" type="email" />
                        <TextField label="CPF" name="cpf" type="cpf" />
                        <TextField label="Senha" name="senha" type="password" />
                        <div className="botoes">
                        <button className="btn btn-dark mt-3" type="reset">Cancelar</button>
                        <button className="btn btn-primary mt-3" type="submit">Enviar</button>
                        </div>
                    </Form>
                </div>
            )}
        </Formik>
            
        
    )
}