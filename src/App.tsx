import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';
import { Router } from './router/Router';
import { BrowserRouter } from 'react-router-dom';
import { LoginUserProvider } from './providers/LoginUserProvider';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <LoginUserProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </LoginUserProvider>
    </ChakraProvider>
  );
}

export default App;
