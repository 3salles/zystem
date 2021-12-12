import React from 'react'
import { Box } from '@chakra-ui/react'

import { AppLayout } from '../../layouts/AppLayout'
import { ListTable } from '../../components/ListTable'

import { Header } from '../../components/Header'
import { RescuedTable } from './RescuedTable'

export const RescuedPage = () => {
  return (
    <AppLayout>
      <Box as="section" w="100%" p="4" maxW={1480}>
        <Header
          title="Resgatados"
          buttonLabel="Novo resgatado"
          typeForm="rescued"
        />
        <Box as="article" mt="10">
          <ListTable>
            <RescuedTable />
          </ListTable>
        </Box>
      </Box>
    </AppLayout>
  )
}
