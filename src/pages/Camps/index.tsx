import React from 'react'
import { Heading, Box, Flex, Button } from '@chakra-ui/react'

import { AppLayout } from '../../layouts/AppLayout'
import { Header } from '../../components/Header'

export const CampsPage = () => {
  return (
    <AppLayout>
      <Box as="section" w="100%" p="4" maxW={1480}>
        <Header title="Acapamentos" buttonLabel="Novo acampamento" />
      </Box>
    </AppLayout>
  )
}
