import React from 'react';
import './index.css';
import {Container , Paper, Box, Typography, Grid , Text} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root:{
        widht: "100vw",
        height: "100vh",
        backgraudColor: theme.palette.grey[300],
        paddingTop: theme.spacing(5),
    },
}));

function CadFuncionario ()  {
    const classes = useStyles();

    return(
       <Container className={classes.root}>
           <Paper component={Box} p={4}></Paper>
        </Container>
    );
}

export default CadFuncionario;