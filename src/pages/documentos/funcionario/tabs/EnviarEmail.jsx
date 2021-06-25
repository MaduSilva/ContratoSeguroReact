import React from 'react';
import { useFormik, Formik, Form } from 'formik';
import { TextField } from '../../../cadastro/components/textField'
import * as Yup from 'yup';
import { useToasts } from 'react-toast-notifications';

//pages
import DocumentoServico from '../../../../servicos/DocumentoServico'

//css
import '../tabs/tabs.css'
const EnviarEmail = () => {
    const {addToast} = useToasts(); 
    const {formik} = useFormik;
    const validate = Yup.object({
        nome: Yup.string()
            .min(3, 'Nome deve ter no mínimo 3 caracteres')
            .required('Obrigatório'),
        email: Yup.string()
            .min(3, 'Email deve ter no mínimo 3 caracteres')
            .required('Obrigatório'),
    })
    
    return (

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

                        <Form className='imputs' style={{display:'grid', justifyContent: 'center'}}>
                            <TextField style={{width:'500px', backgroundColor:'white', margin:'0', height:'50px'}}  placeholder="Nome do Recrutado" name="nome" type="text" />
                           
                            <TextField style={{width:'500px', backgroundColor:'white', margin:'0', height:'50px'}} placeholder="Email do Recrutado" name="email" type="email" />

                            <div className="botoes">
                                <button className="btn btn-dark mt-3" type="reset" >Cancelar</button>
                                
                                <button className="btn btn-primary mt-3" type="submit" value='Submit' disabled={formik.isSubmitting} >Cadastrar</button>
                                
                            </div>
                        </Form>
                    </div>
                )}
            </Formik>



    )

};


export default EnviarEmail;



