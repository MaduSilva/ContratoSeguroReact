import {React, useState } from 'react';
import './CadEmpresa.css';
import {Container , Paper, Box, Typography, Grid , TextField, Select, InputLabel , FormControl, RadioGroup , HandleSubmit, HandleReset} from "@material-ui/core";
import { Formik, Form } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import * as Yup from 'yup';
import ReactPhoneInput from 'react-phone-input-material-ui';

//pages
import Menu from "../../../components/menu/menu";
import ReactPhone from "../components/reactPhone/reactPhone";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100vw",
        height: "100vh",
        backgroundColor: 'theme.palette.grey[300]',
        paddingTop: theme.spacing(5),
       
    },
    textField: {
        fontFamily: 'Comfortaa'
    },
    button: {
        fontFamily: 'Montserrat'
        
    },
    
    
}));

function CadEmpresa ()  {
    
    const validate= Yup.object({
        nomeFantasia: Yup.string()
            .max(15, 'Mais de 15 carcteries')
            .required('Required'),
        razaoSocial: Yup.string()
            .max(15, 'Mais de 15 carcteries')
            .required('email is Required'),
        matriz: Yup.string()
            .max(15, 'Mais de 15 carcteries')
            .required('cpf is Required'),
        senha: Yup.string()
            .max(15, 'Mais de 15 carcteries no CPF')
            .required('senha is Required'),
    })


    const classes = useStyles();
            return(
                
        <Formik
        initialValues={{
            nomeFantasia: '',
            razaoSocial: '',
            matriz: '',
            cnpj: '',
            inscriçãoEstadual:'',
            inscricaoMunicipal:'',
            logradouro:'',
            uf:'',
            cidade:'',
            numero:'',
            complemento:'',
            bairro:'',
        }}
        validationSchema={validate}
        onSubmit={values => {
            console.log(values)
        }}
        
        >

        {formik => (
                   <Container className={classes.root}>
                   <Menu/>
                   
                <h1 className="my-3 font-weight-bold-display-7">Cadastro de Empresa </h1>
        
                   <Paper component={Box} p={4}>
                       <Grid container spacing={3}>
                            <Grid item md={3}>
        
                            <label htmlFor="upload-photo">
                            <input
                                style={{ display: 'none' }}
                                id="upload-photo"
                                name="upload-photo"
                                type="file"
                            />
        
                            <Button color="primary" variant="contained" component="span">
                                Selecione a Foto da empresa
                            </Button>
                            </label>
                                
                                
                           </Grid>
                           
                           <Grid item md={3}>
                               <TextField 
                                InputLabelProps={{
                                    style: { fontFamily: 'Comfortaa' }
                                 }}
                                label="Nome Fantasia"
                                placeholder="Digite o Nome Fantasia"
                                variant="outlined"
                                type="text"
                                name="nomeFantasia"
                                
                                fullWidth
                                
                                />
                           </Grid>
                           <Grid item md={3}>
                               <TextField 
                                InputLabelProps={{
                                    style: { fontFamily: 'Comfortaa' }
                                 }}
                                label="Razão Social"
                                placeholder="Digite a Razão Social"
                                variant="outlined"
                                type="text"
                                name="razaoSocial"
                                fullWidth
                                />
                           </Grid>
                           <Grid item md={3}>
                               <TextField 
                                InputLabelProps={{
                                    style: { fontFamily: 'Comfortaa' }
                                 }}
                                label="Matriz"
                                placeholder="Digite a Matriz da empresa"
                                variant="outlined"
                                name="matriz"
                                fullWidth
                                />
                           </Grid>
                           <Grid item md={3}>
                               <TextField 
                                InputLabelProps={{
                                    style: { fontFamily: 'Comfortaa' }
                                 }}
                                label="CNPJ"
                                placeholder="Digite o CNPJ da empresa"
                                variant="outlined"
                                fullWidth
                                name="cnpj"
                                fullWidth
                                />
                           
                           </Grid>
                            
                           <Grid item md={3}>
                               <TextField 
                                InputLabelProps={{
                                    style: { fontFamily: 'Comfortaa' }
                                 }}
                                label="Logradouro"
                                placeholder="Digite o logradouro da empresa"
                                variant="outlined"
                                fullWidth
                                name="logradouro"
                                fullWidth
                                />
                            </Grid>
                   
                           <Grid item md={3}>
                               <TextField 
                                InputLabelProps={{
                                    style: { fontFamily: 'Comfortaa' }
                                 }}
                                label="UF"
                                placeholder="Digite o UF da empresa"
                                variant="outlined"
                                fullWidth
                                name="uf"
                                fullWidth
                                />
                           </Grid>
                           <Grid item md={3}>
                               <TextField 
                                InputLabelProps={{
                                    style: { fontFamily: 'Comfortaa' }
                                 }}
                                label="Cidade"
                                placeholder="Digite a cidade da Empresa"
                                variant="outlined"
                                fullWidth
                                name="cidade"
                                fullWidth
                                />
                           </Grid>
                           <Grid item md={3}>
                               <TextField 
                                InputLabelProps={{
                                    style: { fontFamily: 'Comfortaa' }
                                 }}
                                label="Numero"
                                placeholder="Digite o numero da empresa"
                                variant="outlined"
                                name="numero"
                                fullWidth
                                />
                           </Grid>
                           <Grid item md={3}>
                               <TextField 
                                InputLabelProps={{
                                    style: { fontFamily: 'Comfortaa' }
                                 }}
                                label="Bairro"
                                placeholder="Digite o bairro da empresa"
                                variant="outlined"
                                fullWidth
                                name="bairro"
                                fullWidth
                                />
                           </Grid>
                           <Grid item md={3}>
                               <ReactPhone/>
                           </Grid>
                           <Grid item md={3}>
                           <TextField
                                InputLabelProps={{
                                    style: { fontFamily: 'Comfortaa' },
                                    shrink: true,
                                 }}
                                id="Data de abertura"
                                label="Data abertura"
                                type="date"
                                defaultValue="2017-05-24"
                                variant="outlined"
                                fullWidth
                                className={classes.textField}
                                />
                           </Grid>
                           <Grid item md={3}>
                               <TextField 
                                InputLabelProps={{
                                    style: { fontFamily: 'Comfortaa' }
                                 }}
                                label="Email"
                                placeholder="Digite o Email da empresa"
                                variant="outlined"
                                fullWidth
                                name="email"
                                fullWidth
                                />
                           </Grid>
                           <Grid item md={3}>
                               <TextField 
                                InputLabelProps={{
                                    style: { fontFamily: 'Comfortaa' }
                                 }}
                                label="Senha"
                                placeholder="Digite a senha da empresa"
                                variant="outlined"
                                fullWidth
                                name="senha"
                                fullWidth
                                />
                           </Grid>
                       </Grid>
                       <div className="button" >
                            <button className="btn btn-dark mt-3">Cancelar</button>
                            <button className="btn btn-primary mt-3" type="submit" >Enviar</button>
                        </div>
                   </Paper>
                  
                   
                </Container>
        )}

        </Formik>
    );

 
}

export default CadEmpresa;