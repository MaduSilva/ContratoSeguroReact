import React from 'react';
import { useFormik, Formik, Form } from 'formik';
import {  Button } from 'react-bootstrap';
import { TextField } from '../../../cadastro/components/textField'
import * as Yup from 'yup';
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import 'animate.css';
import 'react-notifications-component/dist/theme.css';
import { useToasts } from 'react-toast-notifications';

//pages
import DocumentoServico from '../../../../servicos/DocumentoServico'

//css
import '../tabs/tabs.css'
const EnviarEmail = () => {
    const handleOnClickDefault = () => {
        store.addNotification({
            title: "Sucesso!",
            message: "Documento solicitado com sucesso",
            type: "success",
            container: "top-right",
            insert: "top",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],

            dismiss: {
                duration: 10000,
                showIcon: true
            },
            width: 300
        })
    }

    const {addToast} = useToasts(); 
    const validate = Yup.object({
        nome: Yup.string()
            .required('Obrigatório'),
        email: Yup.string()
            .min(3, 'Email deve ter no mínimo 3 caracteres')
            .required('Obrigatório'),
    })

    return (
        
      <div>
            <ReactNotification />
      
        <Formik
            initialValues={{
                nome: '',
                email: '',
            }}
            onSubmit={values => {
                DocumentoServico
                    .enviar(values)
                    .then(resultado => {
                        console.log(resultado)

                        alert('Email enviado com sucesso')

                      
                        addToast(resultado.data.mensagem, {
                            appearance: 'success',
                            autoDismiss: true,
                        })
                        
                          
                    })
            }
            }

        >

           

            {formik => (
                <div className="Container_Doc">
                    <h1 className="my-3 font-weight-bold-display-7">Solicitar assinatura </h1>

                    <Form className='imputs' style={{ display: 'grid', justifyContent: 'center' }}>
                        <TextField style={{ width: '500px', backgroundColor: 'white', margin: '0', height: '50px' }} placeholder="Nome do Recrutado" name="nome" type="text" />

                        <TextField style={{ width: '500px', backgroundColor: 'white', margin: '0', height: '50px' }} placeholder="Email do Recrutado" name="email" type="email" />

                            <div className="botoes">
                                <button className="btn btn-dark mt-3" type="reset" >Cancelar</button>

                            <Button onClick={handleOnClickDefault} className="btn btn-primary mt-3" type="submit" value='Submit' >Enviar</Button>

                        </div>
                    </Form>
                </div>
            )}
            
        </Formik>


</div>
    )

};


export default EnviarEmail;



