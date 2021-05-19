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
                            style: { fontFamily: 'Comfortaa' }
                         }}
                        label="Nome"
                        placeholder="Digite o Nome do Funcionario"
                        variant="outlined"
                        type="text"
                        name="nome"
                        
                        fullWidth
                        
                        />
                   </Grid>
                   <Grid item md={3}>
                       <TextField 
                        InputLabelProps={{
                            style: { fontFamily: 'Comfortaa' }
                         }}
                        label="Email"
                        placeholder="Digite o Email do Funcionario"
                        variant="outlined"
                        type="text"
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
                        placeholder="Digite a Senha do Funcionario"
                        variant="outlined"
                        name="senha"
                        fullWidth
                        />
                   </Grid>
                   <Grid item md={3}>
                       <TextField 
                        InputLabelProps={{
                            style: { fontFamily: 'Comfortaa' }
                         }}
                        label="CPF"
                        placeholder="Digite o CPF do Funcionario"
                        variant="outlined"
                        fullWidth
                        name="cpf"
                        fullWidth
                        />
                   
                   </Grid>
                   <Grid item md={3}>
                       <TextField 
                        InputLabelProps={{
                            style: { fontFamily: 'Comfortaa' }
                         }}
                        label="RG"
                        placeholder="Digite o RG do Funcionario"
                        variant="outlined"
                        fullWidth
                        name="rg"
                        fullWidth
                        />
                   </Grid>
                   <Grid item md={3}>
                       <TextField 
                        InputLabelProps={{
                            style: { fontFamily: 'Comfortaa' }
                         }}
                        label="Estado Civil"
                        placeholder="Digite o Estado Civil do Funcionario"
                        variant="outlined"
                        fullWidth
                        name="estadoCivil"
                        fullWidth
                        />
                    </Grid>
                   <Grid item md={3}>
                   <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-native-simple">Genero</InputLabel>
                    <Select
                    native
                    inputProps={{
                        name: 'genero',
                        id: 'genero',
                        
                    }}
                    >
                    <option aria-label="None" value="" />
                    <option value={10}>Masculino</option>
                    <option value={20}>Feminino</option>
                    <option value={30}>Prefiro não dizer</option>
                    </Select>
                </FormControl>
                   </Grid>
                   <Grid item md={3}>
                       <TextField 
                        InputLabelProps={{
                            style: { fontFamily: 'Comfortaa' }
                         }}
                        label="Formação"
                        placeholder="Digite a Formação do Funcionario"
                        variant="outlined"
                        fullWidth
                        name="formacao"
                        fullWidth
                        />
                   </Grid>
                   <Grid item md={3}>
                       <TextField 
                        InputLabelProps={{
                            style: { fontFamily: 'Comfortaa' }
                         }}
                        label="Telefone"
                        placeholder="Digite o Telefone do Funcionario"
                        variant="outlined"
                        fullWidth
                        name="telefone"
                        fullWidth
                        />
                   </Grid>
                   <Grid item md={3}>
                       <TextField 
                        InputLabelProps={{
                            style: { fontFamily: 'Comfortaa' }
                         }}
                        label="Endereço"
                        placeholder="Digite o Endereço do Funcionario"
                        variant="outlined"
                        fullWidth
                        name="endereco"
                        fullWidth
                        />
                   </Grid>
                   <Grid item md={3}>
                       <TextField 
                        InputLabelProps={{
                            style: { fontFamily: 'Comfortaa' }
                         }}
                        label="Pai"
                        placeholder="Digite o Nome do Pai do Funcionario"
                        variant="outlined"
                        fullWidth
                        name="pai"
                        fullWidth
                        />
                   </Grid>
                   <Grid item md={3}>
                       <TextField 
                        InputLabelProps={{
                            style: { fontFamily: 'Comfortaa' }
                         }}
                        label="Mãe"
                        placeholder="Digite o Nome da Mãe do Funcionario"
                        variant="outlined"
                        fullWidth
                        name="mae"
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