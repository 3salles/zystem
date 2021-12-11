import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { CustomRoutes } from './routes'

import { theme } from './styles/theme'

import '@fontsource/vt323'

export const App = () => (
  <ChakraProvider theme={theme}>
    <CustomRoutes />
  </ChakraProvider>
)
