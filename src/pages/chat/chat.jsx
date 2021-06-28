import { useState } from 'react';
import './chat.css';
import ChatInterface from './homechat';
import Login from './loginchat';
import AuthenticationService from '../../services/authentication';
import logo from '../../assets/img/logoBRQ.png'
import { useHistory } from 'react-router-dom'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';
import firebase from "firebase";
import Menu from '../../components/menu/menu'
import Rodape from '../../components/rodape/rodape'

const Chat = () => {
  const history = useHistory();

  const logout = () => {  

    firebase.auth().signOut().then(() => {
           console.log('saiu');
           history.push('/');
       }).catch((error) => {
          console.log('error')
         });
   }
  
  const [logged, setLogged] = useState(AuthenticationService.isLoggedIn())
  
  AuthenticationService.observeStatus(user => {
    setLogged(!!user)
  })

  return (
    <div className="styleloginchat">
      <Menu/>
    
    <div className="Chat">
      <div className="Logo">
        <img src="https://icon-library.com/images/chat-icon-white/chat-icon-white-26.jpg" alt="BRQ logo"/>
        <IconButton  onClick={() => logout()}><ExitToAppIcon/></IconButton >
      </div>
      { logged ? <ChatInterface /> : <Login /> }
    </div>
    <Rodape/>
    </div>
    
  );
}

export default Chat;