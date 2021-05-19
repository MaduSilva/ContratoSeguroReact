import React from 'react';
import {  Form , useFormik , MyFormik } from 'formik';
import { TextField } from './textField'
import '../cadastroRecrutado/index.css'
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import { blue } from '@material-ui/core/colors';
import {  withStyles } from '@material-ui/core/styles';

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

    const formik = useFormik({
        initialValues : {
            nome: '',
            email: '',
            cpf: '',
            senha: '',
        },
        onsubmit : values => {
            alert(values); 
        }
    })


    return(
        
            
                <div>
                    <h1 className="my-3 font-weight-bold-display-7">Cadastro de Recrutado </h1>
                    
                    <Form className='imputs' onsubmit={formik.handleSubmit}>
                        <TextField label="Nome" name="nome" type="text" value={formik.values.nome} onChange={formik.handleChange} required/>
                        <TextField label="Email" name="email" type="email" value={formik.values.email} onChange={formik.handleChange} required/>
                        <TextField label="CPF" name="cpf" type="cpf" value={formik.values.cpf}  onChange={formik.handleChange} required />
                        <TextField label="Senha" name="senha" type="password" value={formik.values.senha}  onChange={formik.handleChange} required />
                        
                        <div className="botoes">
                        <button className="btn btn-dark mt-3"  >Cancelar</button>
                        <button className="btn btn-primary mt-3" type="submit" value='Submit' >Enviar</button>
                            
                        </div>
                    </Form>
                </div>
         
            
        
    )
}