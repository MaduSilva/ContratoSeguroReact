import MessageSender from '../../components/chat/MessageSender';
import Messages from '../../components/chat/Messages';
import useMessages from '../../hooks/useMessages';
import firebase from "firebase";
import { useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

import './homechat.css'

const ChatInterface = () => {
  const { messages } = useMessages()
  const history = useHistory();

  const logout = () => {
     firebase.auth().signOut().then(() => {
            console.log('saiu');
            history.push('/');
        }).catch((error) => {
           console.log('error')
          });
    }

  return (
  <div className="Chat">
    <Messages messages={messages} />
    <MessageSender />
    <Button onClick={() => logout()}>logout</Button>
  </div>
  )
  

}
export default ChatInterface