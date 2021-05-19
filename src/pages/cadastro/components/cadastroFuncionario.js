import {React, useState } from 'react';
import './CadFuncionario.css';
import {Container , Paper, Box, Typography, Grid , TextField, Select, InputLabel , FormControl, RadioGroup , HandleSubmit} from "@material-ui/core";
import { Formik, Form } from 'formik';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100vw",
        height: "100vh",
        backgraudColor: theme.palette.grey[300],
        paddingTop: theme.spacing(5),
    },
}));

export const cadastroFun = () =>  {
    const classes = useStyles();
            return(
    
       <Container className={classes.root}>
        <h1 className="my-3 font-weight-bold-display-7">Cadastro de Funcionario </h1>

           <Paper component={Box} p={4}>
               <Grid container spacing={3}>
                   
                   <Grid item md={3}>
                       <TextField 
                        label="Nome"
                        placeholder="Digite o Nome do Funcionario"
                        variant="outlined"
                        name="nome"
                        fullWidth
                        />
                   </Grid>
                   <Grid item md={3}>
                       <TextField 
                        label="Email"
                        placeholder="Digite o Email do Funcionario"
                        variant="outlined"
                        
                        name="email"
                        fullWidth
                        />
                   </Grid>
                   <Grid item md={3}>
                       <TextField 
                        label="Senha"
                        placeholder="Digite a Senha do Funcionario"
                        variant="outlined"
                        f
                        name="senha"
                        fullWidth
                        />
                   </Grid>
                   <Grid item md={3}>
                       <TextField 
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
                        label="Mãe"
                        placeholder="Digite o Nome da Mãe do Funcionario"
                        variant="outlined"
                        fullWidth
                        name="mae"
                        fullWidth
                        />
                   </Grid>
               </Grid>
               <div className="botoes">
                        <button className="btn btn-dark mt-3" >Cancelar</button>
                        <button className="btn btn-primary mt-3" type="submit" onClick={addUser}>Enviar</button>
            </div>
           </Paper>
          
           
        </Container>
    );

}

