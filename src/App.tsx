import * as React from 'react'
import { ChakraProvider, Box } from '@chakra-ui/react'
import { theme } from './styles/theme'
import { Home } from './pages/Home'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box bg="brand.900" height="100vh">
      <Home />
    </Box>
  </ChakraProvider>
)
