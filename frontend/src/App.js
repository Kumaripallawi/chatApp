
import './App.css';
import {Route, Router } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import ChatPage from './Pages/ChatPage';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
   
    <div className="App">
     
    
     <Route path="/" exact component={ Homepage }/>
  
   <Route path="/chats"  component={ChatPage}/>
    
    
     
    </div>
   
  );
}

<ChakraProvider>
  <App/>
</ChakraProvider>


export default App;
