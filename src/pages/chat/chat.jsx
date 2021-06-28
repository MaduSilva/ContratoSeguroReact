import { useState } from 'react';
import './chat.css';
import ChatInterface from './homechat';
import Login from './loginchat';
import AuthenticationService from '../../services/authentication';
import logo from '../../assets/img/logoBRQ.png'

const Chat = () => {
  const [logged, setLogged] = useState(AuthenticationService.isLoggedIn())
  
  AuthenticationService.observeStatus(user => {
    setLogged(!!user)
  })

  return (
    <div className="Chat">
      <div className="Logo">
        <img src={logo} alt="BRQ logo"/>
      </div>
      { logged ? <ChatInterface /> : <Login /> }
    </div>
  );
}

export default Chat;