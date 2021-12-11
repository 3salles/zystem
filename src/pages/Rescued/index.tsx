import React from 'react'
import { Box } from '@chakra-ui/react'

import { AppLayout } from '../../layouts/AppLayout'
import { ListTable } from '../../components/ListTable'

import rescued from '../../utils/rescued.json'
import { RescuedCard } from '../../components/Cards/RescuedCard'
import { Header } from '../../components/Header'

export const RescuedPage = () => {
  const data = rescued as RescuedCard[]
  return (
    <AppLayout>
      <Box as="section" w="100%" p="4" maxW={1480}>
        <Header title="Resgatados" buttonLabel="Novo resgatado" />
        <Box as="article" mt="10">
          <ListTable data={data} />
        </Box>
      </Box>
    </AppLayout>
  )
}
