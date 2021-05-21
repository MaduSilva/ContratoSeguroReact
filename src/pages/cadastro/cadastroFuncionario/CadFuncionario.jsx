import {React, useState } from 'react';
import './CadFuncionario.css';
import {Container , Paper, Box, Typography, Grid , TextField, Select, InputLabel , FormControl, RadioGroup , HandleSubmit} from "@material-ui/core";
import { Formik, Form } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

//pages
import Menu from "../../../components/menu/menu";

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

function CadFuncionario ()  {
    const [values, setValues] = useState({
        nome: "",
    });

    function onChange(ev){
        setValues({
            ...values,
            [ev.target.nome]: ev.target.value,
        })

    }

    //DEVE TER NOME EMAIL SENHA TELEFONE CPF RG FORMAÇÃO DATA NASCIMENTO TIPO DE USUÁRIO 

    const classes = useStyles();
            return(

        
       <Container className={classes.root}>
           <Menu/>
           
        <h1 className="my-3 font-weight-bold-display-7">Cadastro de Funcionario </h1>

           <Paper component={Box} p={4}>
               <Grid container spacing={3}>
                   

                
                   <Grid item md={3}>
                       <TextField 
                        InputLabelProps={{
                            style: { fontFamily: 'Comfortaa', marginTop: '-13px' },
                            shrink: true,
                         }}
                        label="Nome do funcionário"
                        variant="outlined"
                        type="text"
                        name="nome"
                        
                        fullWidth
                        
                        />
                   </Grid>
                   <Grid item md={3}>
                       <TextField 
                        InputLabelProps={{
                            style: { fontFamily: 'Comfortaa', marginTop: '-13px' },
                            shrink: true,
                         }}
                        label="Email"
                        variant="outlined"
                        type="text"
                        name="email"
                        fullWidth
                        />
                   </Grid>
                   <Grid item md={3}>
                       <TextField 
                        InputLabelProps={{
                            style: { fontFamily: 'Comfortaa', marginTop: '-13px' },
                            shrink: true,
                         }}
                        label="Senha"
                        variant="outlined"
                        name="senha"
                        fullWidth
                        />
                   </Grid>

                   <Grid item md={3}>
                       <TextField 
                        InputLabelProps={{
                            style: { fontFamily: 'Comfortaa', marginTop: '-13px' },
                            shrink: true,
                         }}
                        label="Telefone"
                        variant="outlined"
                        fullWidth
                        name="telefone"
                        fullWidth
                        />
                   </Grid>

                   <Grid item md={3}>
                       <TextField 
                        InputLabelProps={{
                            style: { fontFamily: 'Comfortaa', marginTop: '-13px' },
                            shrink: true,
                         }}
                        label="CPF"
                        variant="outlined"
                        fullWidth
                        name="cpf"
                        fullWidth
                        />
                   
                   </Grid>
                   <Grid item md={3}>
                       <TextField 
                        InputLabelProps={{
                            style: { fontFamily: 'Comfortaa', marginTop: '-13px' },
                            shrink: true,
                         }}
                        label="RG"
                        variant="outlined"
                        fullWidth
                        name="rg"
                        fullWidth
                        />
                   </Grid>
                   <Grid item md={3}>
                       <TextField 
                        InputLabelProps={{
                            style: { fontFamily: 'Comfortaa', marginTop: '-13px' },
                            shrink: true,
                         }}
                        label="Formação"
                        variant="outlined"
                        fullWidth
                        name="formacao"
                        fullWidth
                        />
                   </Grid>
                 
                   <Grid  item md={3}>
                       <TextField 
                        InputLabelProps={{
                            style: { fontFamily: 'Comfortaa', marginTop: '-13px' },
                            shrink: true,
                         }}
                        label="Nascimento"
                        variant="outlined"
                        fullWidth
                        name="nasicmento"
                        type="date"
                        fullWidth
                        />
                   </Grid>
               </Grid>
               <div className="button" >
                        <button className="btn btn-dark mt-3" >Cancelar</button>
                        <button className="btn btn-primary mt-3" type="submit" >Enviar</button>
                </div>
           </Paper>
          
           
        </Container>
    );

 
}

export default CadFuncionario;