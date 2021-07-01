import React, { useRef, useEffect, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Menu from "../../components/menu/menu";
import Rodape from "../../components/rodape/rodape"
import Funcionario from '../../assets/img/avatar.jpg'
import jwt_decode from 'jwt-decode';
import { Button, Form, Col, Container, Row } from 'react-bootstrap';
import FuncionarioServico from '../../servicos/FuncionarioServico';
import './index.css';
import { useToasts } from 'react-toast-notifications';
import { useHistory } from 'react-router-dom';

const PerfilFuncionario = () => {
    const { addToast } = useToasts();
    const token = localStorage.getItem('token-contratoseguro')
    const nomeFuncionario = jwt_decode(token).family_name.Nome;
    const emailFuncionario = jwt_decode(token).email;
    const [image, setImage] = useState();
    const [preview, setPreview] = useState();
    const fileInputRef = useRef();
    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
    const [isSelected ,setIsSelected] = useState();

    const history = useHistory();

    const [recruited, setRecruited] = useState("");
    useEffect(() => {
        listarUser()
    }, []);


    const listarUser = () => {
        FuncionarioServico
            .buscarId(jwt_decode(token).jti[0])
            .then(response => {
                setRecruited(response.data.data)

            })
    }

    const alterar = (values) => {
        FuncionarioServico
            .alterarSenha(values)
            .then(resultado => {
                if (resultado.data.sucesso) {
                    addToast(resultado.data.mensagem, {
                        appearance: 'success',
                        autoDismiss: true,
                    })
                    formik.resetForm();
                } else {
                    addToast(resultado.data.mensagem, {
                        appearance: 'warning',
                        autoDismiss: true,
                    })
                }

                formik.setSubmitting(false);
            })
    }



    const formik = useFormik({
        initialValues: {
            idUsuario: jwt_decode(token).jti[1],
            senhaAtual: '',
            novaSenha: '',
            urlFoto: '',
        },
        onSubmit: values => {
            console.log(values);
            alterar(values);
        },
        validationSchema: Yup.object().shape({
            novaSenha: Yup.string()
                .min(6, 'A nova senha deve ter no mínimo 6 caracteres')
                .required('Campo nova senha obrigatório'),
            senhaAtual: Yup.string()
                .required('Campo senha atual obrigatório'),
        })

    })

    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};

    const handleSubmission = () => {
		const formData = new FormData();

		formData.append('Arquivo', selectedFile);

		fetch(
			'https://localhost:5001/v1/account/users/image',
			{
				method: 'PUT',
				body: formData,
                data: {
                    idUsuario: jwt_decode(token).jti[1],
                },
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('token-contratoseguro')}`
                }
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
                alert('Imagem alterada com sucesso')
                history.push('/')
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};





    return (

        <div>
            <Menu />

            <div className="Barra_superior">
                <p className="Titulo_perfilfunc"> Meus Dados</p>
            </div>

            <div className="teste">
                <div className="Container_totality">
                    <div className="Container_perfil">

                    <div className="Barra_nome">
                            <h1>{jwt_decode(token).given_name}</h1>
                        </div>

                    <div className="ImageAndButton">
                          <img src={recruited.urlFoto}></img>

                        <div className="inputimage">
                        <input  type="file" name="file" onChange={changeHandler} />

                            <button onClick={handleSubmission}>Salvar Imagem</button>
                        </div>
                  </div>


                        <div className="mb-2">
                            <Form.Group >

                                <Form.Control
                                    className="Input_senha"
                                    type="password"
                                    placeholder="SENHA ATUAL"
                                    name="senhaAtual"
                                    onChange={formik.handleChange}
                                    value={formik.values.senhaAtual}
                                    required />
                                {formik.errors.senhaAtual && formik.touched.senhaAtual ? (<div className="error">{formik.errors.senhaAtual}</div>) : null}
                            </Form.Group>

                        </div>
                        <div className="mb-2">
                            <Form.Group>

                                <Form.Control
                                    className="Input_senha"
                                    type="password"
                                    placeholder="NOVA SENHA"
                                    name="novaSenha"
                                    onChange={formik.handleChange}
                                    value={formik.values.novaSenha}
                                    required />
                                {formik.errors.novaSenha && formik.touched.novaSenha ? (<div className="error">{formik.errors.novaSenha}</div>) : null}
                            </Form.Group>

                        </div>
                        <div >
                            <Button onClick={formik.handleSubmit} type="submit" value="Submit" variant="primary" size="lg">
                                Salvar
                            </Button>
                        </div>
                    </div>

                    <div className="Container_totality2">
                        <div className="infoprofile">
                            <h3>Email</h3>
                            <a >{recruited.email}</a>
                        </div>

                        <div className="infoprofile">
                            <h3 >Telefone</h3>
                            <a >+55 11986628675</a>
                        </div>

                        <div className="infoprofile">
                            <h3 >Registro Geral</h3>
                            <a >{recruited.rg}</a>
                        </div>
                        <div className="infoprofile">
                            <h3 >CPF</h3>
                            <a >{recruited.cpf}</a>
                        </div>
                    </div>
                </div>
            </div>

            < Rodape />
        </div>
    )
}

export default PerfilFuncionario;

