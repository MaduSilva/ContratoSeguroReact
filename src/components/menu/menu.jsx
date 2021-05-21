import React from 'react';
import '../menu/menu.css'

//material ui
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab'
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

//imagens 
import logo from '../../assets/img/logo-brq.png';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: 60,

  }
});

export default function Menu() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <div>
      <img src={logo} className="nav-logo" alt="logo brq" />

      <Paper className={classes.root}>

        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{ style: {display: 'none'} }}
          textColor="inherit"
          centered
        >

          <Tab href="/" label="Home" />
          <Tab href="/cadastrorec" label="Cad Recrutado" />
          <Tab href="/cadastrofunc" label="Cad Funcionario" />
          <Tab href="/cadastroemp" label="Empresa" />
          <Tab href="/documentos" label="Documentos" />
          

          <a className="exit" fontSize="large" href="/login">Login</a>

        </Tabs>
      </Paper>
    </div>
  );
}