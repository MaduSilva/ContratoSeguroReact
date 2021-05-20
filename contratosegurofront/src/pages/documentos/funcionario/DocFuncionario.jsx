import React from 'react'
import Menu from '../../../components/menu/menu'
import Rodape from '../../../components/rodape/rodape'
import '../funcionario/DocFuncionario.css'

import FileUploadIcon from '../../../assets/img/file-upload.png'

<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/3.1.0/css/font-awesome.min.css" />


const DocRecrutado = () => {
    return (
        <div>
            <Menu />
            <Paper className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                </Tabs>
            </Paper>
            <Rodape />
        </div>
    )

}

export default DocRecrutado;