import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Anexo from '../../../components/anexo/anexo'
import '../funcionario/DocFuncionario.css'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}



TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#E9E9E9',
  },
  tab: {
    backgroundColor: 'purple',
  }
}));

export default function DocFuncionario() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar  elevation={0} position="static">
        <Tabs style={{
          backgroundColor: '#e9e9e9',
          boxShadow: 'none',
        }} value={value} onChange={handleChange}  TabIndicatorProps={{ style: { display: 'none' } }} aria-label="simple tabs example">

          <Tab style={{
            backgroundColor: '#F27405',
            width: '237px',
            height: '90px',
	          borderRadius: '04px',
            left: '154px',
            marginTop: '20px'
          }} label="Aguardando minha assinatura" {...a11yProps(0)} />

          <Tab style={{
            backgroundColor: '#80BFB0',
            width: '237px',
            height: '90px',
	          borderRadius: '04px',
            left: '172px',
            marginTop: '20px'
          }}
            className="Tab1" label="Documentos Enviados" {...a11yProps(1)} />

          <Tab style={{
            backgroundColor: '#0367A6',
            width: '237px',
            height: '90px',
	          borderRadius: '04px',
            left: '190px',
            marginTop: '20px'
          }}
            className="Tab2" label="Concluídos" {...a11yProps(2)} />

          <Tab style={{
            backgroundColor: '#A60303',
            width: '237px',
            height: '90px',
	          borderRadius: '04px',
            left: '210px',
            marginTop: '20px'
          }}
           className="Tab3" label="Falhas" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Anexo />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Aqui vamos listar todos os documentos 
      </TabPanel>
      <TabPanel value={value} index={2}>
      Aqui vamos listar os documentos concluídos
      </TabPanel>
      <TabPanel value={value} index={3}>
      Aqui vamos listar os documentos com falha
      </TabPanel>
    </div>
  );
}