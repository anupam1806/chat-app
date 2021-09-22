import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css';


const projectID = "7d705acf-4e9e-4971-ac85-4ec1770b427b";

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;
  
    return (
      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    );
  };
  
  
  export default App;