import React from 'react'
import { Box } from '@chakra-ui/react'
import { AppLayout } from '../../layouts/AppLayout'
import { Header } from '../../components/Header'
import { ListTable } from '../../components/ListTable'
import { ActivitiesTable } from './ActivitiesTable'

export const ActivitiesPage = () => {
  return (
    <AppLayout>
      <Box as="section" w="100%" p="4" maxW={1480}>
        <Header title="Atividades" buttonLabel="Nova atividade" />
        <Box as="article" mt="10">
          <ListTable>
            <ActivitiesTable />
          </ListTable>
        </Box>
      </Box>
    </AppLayout>
  )
}
