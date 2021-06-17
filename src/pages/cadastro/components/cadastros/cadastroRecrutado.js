import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from '../textField'
import '../../cadastroRecrutado/CadRecrutado.css'
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import { blue } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import RecrutadoServico from "../../../../servicos/RecrutadoServico";
import { div } from 'prelude-ls';


export const CadastroRec = () => {

    const validate = Yup.object({
        nome: Yup.string()
            .max(15, 'Mais de 15 carcteries')
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
    return (


        <Formik
            initialValues={{
                nome: '',
                email: '',
                senha: '',
                telefone: '',
                cpf: '',
                tipo: '1',

            }}
            validationSchema={validate}
            onSubmit={values => {
                RecrutadoServico
                    .cadastrar(values)
                    .then(resultado => {
                        console.log(resultado)
                        if (resultado.data.sucesso) {
                            alert('Usuário Cadastrado, confira email')
                        } else {
                            alert('Dados inválidos ou repetidos')
                        }
                    })
            }
            }

        >
            {formik => (
                <div>
                    <h1 className="my-3 font-weight-bold-display-7">Cadastro de Recrutado </h1>

                    <Form className='imputs' style={{display:'grid', justifyContent: 'center'}}>
                        <TextField   style={{width:'500px', backgroundColor:'white', margin:'0', height:'40px'}} placeholder="NOME" name="nome" type="text" />
                        <TextField  style={{width:'500px', backgroundColor:'white', margin:'0', height:'40px'}}  placeholder="EMAIL" name="email" type="email" />
                        <TextField  style={{width:'500px', backgroundColor:'white', margin:'0', height:'40px'}}  placeholder="SENHA" name="senha" type="password" />
                        <TextField  style={{width:'500px', backgroundColor:'white', margin:'0', height:'40px'}} placeholder="TELEFONE" name="telefone" type="text" />
                        <TextField  style={{width:'500px', backgroundColor:'white', margin:'0', height:'40px'}}  placeholder="CPF" name="cpf" type="cpf" />




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