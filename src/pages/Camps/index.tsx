import React from 'react'
import { Box } from '@chakra-ui/react'

import { AppLayout } from '../../layouts/AppLayout'
import { Header } from '../../components/Header'

import { ListTable } from '../../components/ListTable'
import { CampsTable } from './CampsTable'

export const CampsPage = () => {
  return (
    <AppLayout>
      <Box as="section" w="100%" p="4" maxW={1480}>
        <Header
          title="Acapamentos"
          buttonLabel="Novo acampamento"
          typeForm="camp"
        />
        <Box as="article" mt="10">
          <ListTable>
            <CampsTable />
          </ListTable>
        </Box>
      </Box>
    </AppLayout>
  )
}
