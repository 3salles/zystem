import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { CustomRoutes } from './routes'

import { theme } from './styles/theme'

import '@fontsource/vt323'
import { FormProvider } from './hooks/useForm'

export const App = () => {
  return (
    <FormProvider>
      <ChakraProvider theme={theme}>
        <CustomRoutes />
      </ChakraProvider>
    </FormProvider>
  )
}
