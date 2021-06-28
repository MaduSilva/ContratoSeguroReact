import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from '../textField'
import '../../cadastroFuncionario/CadFuncionario.css'
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import { blue } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import FuncionarioServico from "../../../../servicos/FuncionarioServico";
import { div } from 'prelude-ls';
import { useToasts } from 'react-toast-notifications';



export const CadastroFuncio = () => {
    const { addToast } = useToasts();
    const validate = Yup.object({
        nome: Yup.string()
            .min(2, 'O nome deve ter no mínimo 2 caracteres')
            .required('Campo nome obrigatório'),
        email: Yup.string()
            .min(2, 'O nome deve ter no mínimo 2 caracteres')
            .required('Campo email obrigatório'),
        cpf: Yup.string()
            .max(11, 'O campo deve ter 11 caracteres')
            .required('Campo cpf obrigatório'),
            rg: Yup.string()
            .max(9, 'O campo deve ter 9 caracteres')
            .required('Campo rg obrigatório'),
        senha: Yup.string()
            .min(6, 'O campo deve ter no mínimo 6 caracteres')
            .required('Campo senha obrigatório'),
    })
    return (


        <Formik
            initialValues={{
                nome: '',
                email: '',
                senha: '',
                telefone: '',
                cpf: '',
                rg: '',
                formação: '',
                dataNascimento: '',
                tipo: '2',

            }}
            validationSchema={validate}
            onSubmit={values => {
                FuncionarioServico
                    .cadastrar(values)
                    .then(resultado => {
                        console.log(resultado)
                        if (resultado.data.sucesso) {
                            addToast(resultado.data.mensagem, {
                                appearance: 'success',
                                autoDismiss: true,
                            })
                        } else {
                            addToast(resultado.data.mensagem, {
                                appearance: 'error',
                                autoDismiss: true,
                            })
                        }
                    })
            }
            }

        >
            {formik => (
                <div>
                    <h1 className="my-3 font-weight-bold-display-7">Cadastro de Funcionário </h1>

                    <Form className='imputs' style={{ display: 'grid', justifyContent: 'center' }}>
                        <TextField style={{ width: '500px', backgroundColor: 'white', margin: '0', height: '40px' }} placeholder="NOME" name="nome" type="text" />
                        <TextField style={{ width: '500px', backgroundColor: 'white', margin: '0', height: '40px' }} placeholder="EMAIL" name="email" type="email" />
                        <TextField style={{ width: '500px', backgroundColor: 'white', margin: '0', height: '40px' }} placeholder="SENHA" name="senha" type="password" />
                        <TextField style={{ width: '500px', backgroundColor: 'white', margin: '0', height: '40px' }} placeholder="TELEFONE" name="telefone" type="text" />
                        <TextField style={{ width: '500px', backgroundColor: 'white', margin: '0', height: '40px' }} placeholder="CPF" name="cpf" type="cpf" />
                        <TextField style={{ width: '500px', backgroundColor: 'white', margin: '0', height: '40px' }} placeholder="RG" name="rg" type="text" />
                        <TextField style={{ width: '500px', backgroundColor: 'white', margin: '0', height: '40px' }} placeholder="FORMAÇÃO" name="formação" type="text" />
                        <TextField style={{ width: '500px', backgroundColor: 'white', margin: '0', height: '40px' }} placeholder="DATA DE NASCIMENTO" name="dataNascimento" type="date" />




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