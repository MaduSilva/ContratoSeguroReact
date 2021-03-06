import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import '../funcionario/DocFuncionario.css'
import Enviados from './tabs/Enviados'
import Completos from './tabs/Completos'
import EnviarEmail from './tabs/EnviarEmail'
import Falhas from './tabs/Falhas'


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
      <AppBar elevation={0} position="static">
        <Tabs style={{
       
          flexWrap: 'wrap',
          backgroundColor: '#e9e9e9',
          boxShadow: 'none',
        }} value={value} onChange={handleChange} TabIndicatorProps={{ style: { display: 'none' } }} aria-label="simple tabs example">

          <Tab style={{
            backgroundColor: '#F27405',
            width: '237px',
            height: '90px',
            borderRadius: '04px',
           
          }} label="Solicitar Assinatura" {...a11yProps(0)} />

          <Tab style={{
            backgroundColor: '#80BFB0',
            width: '237px',
            height: '90px',
            borderRadius: '04px',
          
          }}
            className="Tab1" label="Documentos Enviados" {...a11yProps(1)} />

          <Tab style={{
            backgroundColor: '#0367A6',
            width: '237px',
            height: '90px',
            borderRadius: '04px',
           
          }}
            className="Tab2" label="Conclu??dos" {...a11yProps(2)} />

          <Tab style={{
            backgroundColor: '#A60303',
            width: '237px',
            height: '90px',
            borderRadius: '04px',
           
          }}
            className="Tab3" label="Falhas" {...a11yProps(3)} />

          {/* <IconButton color="secondary" aria-label="add an alarm">
            <PublishIcon fontSize="large" />
          </IconButton> */}




        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
         <EnviarEmail/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Enviados/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Completos/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Falhas/>
      </TabPanel>

    </div>
  );
}