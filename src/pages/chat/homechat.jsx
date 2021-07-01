import MessageSender from '../../components/chat/MessageSender';
import Messages from '../../components/chat/Messages';
import useMessages from '../../hooks/useMessages';



import './homechat.css'

const ChatInterface = () => {
  const { messages } = useMessages()


 

  return (
        <div className="ChatInterface">
          <Messages messages={messages} />
          <MessageSender />
    </div>
  );
}
export default ChatInterface