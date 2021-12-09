import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { theme } from './styles/theme'
import { Home } from './pages/Home'

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </ChakraProvider>
)
