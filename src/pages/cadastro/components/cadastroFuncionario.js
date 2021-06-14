import React from 'react';
import { useFormik } from 'formik';
import { TextField } from './textField'
import '../cadastroRecrutado/index.css'
import * as Yup from 'yup';
import { blue } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import FuncionarioServico from "../../../servicos/FuncionarioServico";
import {Form, Button, Table, Card, Container, Jumbotron, Spinner} from 'react-bootstrap';
import { Alert, AlertTitle } from '@material-ui/lab';

export const CadastroFuncio = () => {

    const formik = useFormik({
        initialValues: {
            nome: '',
            email: '',
            senha: '',
            telefone: '',
            cpf: '',
            rg: '',
            formacao: '',
            data: '',
            tipo: '2',

        },
        onSubmit: values => {
            FuncionarioServico
                .cadastrar(values)
                .then(resultado => resultado.json())
                .then(resultado => {
              
                        alert('Cadastrado com Sucesso')
                        formik.resetForm();
                    } 
                )
                .catch(erro => {
                    console.log(`erro ${erro}`);
                })
        },

        validationSchema: Yup.object().shape({
            nome: Yup.string()
                .min(3, 'O nome deve possuir no mínimo 3 caracteres')
                .max(100, 'O nome deve possuir no máximo 100 caracteres')
                .required('Campo nome obrigatório'),
            email: Yup.string()
                .required('Campo email obrigatório'),
            cpf: Yup.string()
                .min(11, 'O CPF deve possuir no mínimo 11 caracteres')
                .max(11, 'O CPF deve possuir no máximo 11 caracteres')
                .required('Campo CPF obrigatório'),
                rg: Yup.string()
                .min(9, 'O RG deve possuir no mínimo 09 caracteres')
                .max(9, 'O RG deve possuir no máximo 09 caracteres')
                .required('Campo RG obrigatório'),
            senha: Yup.string()
                .min(6, 'A senha deve possuir no mínimo 06 caracteres')
                .required('Campo Senha obrigatório'),
        })
    })



return (
    <div>
        <Form onSubmit={formik.handleSubmit}>

            <Form.Group>
                <Form.Label>Nome</Form.Label>
                <Form.Control
                    type="text"
                    name="nome"
                    placeholder="Nome do Funcionário"
                    value={formik.values.nome}
                    onChange={formik.handleChange}
                    required
                />
                {formik.errors.nome && formik.touched.nome ? (<div className="error">{formik.errors.nome}</div>) : null}
            </Form.Group>

            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    required
                />
                {formik.errors.email && formik.touched.email ? (<div className="error">{formik.errors.email}</div>) : null}
            </Form.Group>

           
            <Form.Group>
                <Form.Label>Senha</Form.Label>
                <Form.Control
                    type="password"
                    name="senha"
                    placeholder="Senha"
                    value={formik.values.senha}
                    onChange={formik.handleChange}
                    required
                />
                {formik.errors.senha && formik.touched.senha ? (<div className="error">{formik.errors.senha}</div>) : null}
            </Form.Group>

            <Form.Group>
                <Form.Label>Telefone</Form.Label>
                <Form.Control
                    type="Telephone"
                    name="telefone"
                    placeholder="Telefone"
                    value={formik.values.telefone}
                    onChange={formik.handleChange}
                    required
                />
                {formik.errors.telefone && formik.touched.telefone ? (<div className="error">{formik.errors.telefone}</div>) : null}
            </Form.Group>

            <Form.Group>
                <Form.Label>CPF</Form.Label>
                <Form.Control
                    type="Telephone"
                    name="cpf"
                    placeholder="Cpf"
                    value={formik.values.cpf}
                    onChange={formik.handleChange}
                    required
                />
                {formik.errors.cpf && formik.touched.cpf ? (<div className="error">{formik.errors.cpf}</div>) : null}
            </Form.Group>

            <Form.Group>
                <Form.Label>RG</Form.Label>
                <Form.Control
                    type="Telephone"
                    name="rg"
                    placeholder="RG"
                    value={formik.values.rg}
                    onChange={formik.handleChange}
                    required
                />
                {formik.errors.rg && formik.touched.rg ? (<div className="error">{formik.errors.rg}</div>) : null}
            </Form.Group>

            <Form.Group>
                <Form.Label>Formação</Form.Label>
                <Form.Control
                    type="text"
                    name="formacao"
                    placeholder="Formação"
                    value={formik.values.forrmacao}
                    onChange={formik.handleChange}
                    required
                />
                {formik.errors.formacao && formik.touched.formacao ? (<div className="error">{formik.errors.formacao}</div>) : null}
            </Form.Group>


            <Form.Group>
                <Form.Label>Data de Nascimento</Form.Label>
                <Form.Control
                    type="Date"
                    name="data"
                    placeholder="Data de Nascimento"
                    value={formik.values.data}
                    onChange={formik.handleChange}
                    required
                />
                {formik.errors.data && formik.touched.data ? (<div className="error">{formik.errors.data}</div>) : null}
            </Form.Group>




           

            <Button type="submit" value="Submit" > Salvar</Button>
        </Form>

            

    </div>
)
}