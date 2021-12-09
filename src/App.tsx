import * as React from 'react'
import { ChakraProvider, Box } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { theme } from './styles/theme'
import { Home } from './pages/Home'

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Box bg="brand.900" height="100vh">
        <Home />
      </Box>
    </BrowserRouter>
  </ChakraProvider>
)
