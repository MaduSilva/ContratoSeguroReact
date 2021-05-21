import React from 'react';
import '../menu/menu.css'

//material ui
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab'
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

//jwt
import jwt_decode from 'jwt-decode'

//react router dom
import { useHistory } from 'react-router-dom'

//imagens 
import logo from '../../assets/img/logo-brq.png';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: 60,

  }
});


export default function Menu() {

  function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={(event) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }

  //style
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //jwt login
  const history = useHistory();
  const sair = (event) => {
    event.preventDefault();
    localStorage.removeItem('token-contratoseguro');
    history.push('/');
  }

  const renderMenu = () => {
    const token = localStorage.getItem('token-contratoseguro')

    if (token === null) {
      return (
        <div>
          <Paper className={classes.root}>
            <Tabs
              value={value}
              onChange={handleChange}
              TabIndicatorProps={{ style: { backgroundColor: "#011826", marginTop: '30px'} }}
              textColor="inherit"
              centered
            >

              <Tab label="Home" />
              <Tab label="Cadastro" />
              <Tab href="/documentos" label="Documentos" />

              <a className="exit" fontSize="large" href="/">Login</a>
            </Tabs>
          </Paper>
        </div>
      );
    }
    else if (jwt_decode(token).role === '1') {
      return (
        <div>
          <Paper className={classes.root}>
            <Tabs
              value={value}
              onChange={handleChange}
              TabIndicatorProps={{ style: { backgroundColor: "#011826", } }}
              textColor="inherit"
              centered
            >

              <Tab label="Dashboard" />
              <Tab label="Documentos" />
              <Tab label="Chat" />
              <Tab label="Cadastro" />
              <Tab label="Perfil" />

              {/* Icone notificação */}
              <NotificationsIcon className="notification" />

              {/* Icone Usuario */}
              <div className="user" alt="icon user">

                {/* Icone sair */}
                <ExitToAppIcon className="exit" fontSize="large" />
             
        </div>
        </Tabs>
        </Paper>
        </div>
    );
    }
  }

    return (
          <div>
            <img src={logo} className="nav-logo" alt="logo brq" />

            {renderMenu()}
          </div>
    );

    }
