import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme.js'

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Router> 
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
    </Router>
  </React.StrictMode>,
)