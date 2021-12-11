import React from 'react'
import { Box } from '@chakra-ui/react'
import { AppLayout } from '../../layouts/AppLayout'
import { Header } from '../../components/Header'
import { ListTable } from '../../components/ListTable'
import { ActivitiesTable } from './ActivitiesTable'

import activities from '../../utils/activities.json'
import { Activity } from '../../models'

export const ActivitiesPage = () => {
  const data = activities as Activity[]
  return (
    <AppLayout>
      <Box as="section" w="100%" p="4" maxW={1480}>
        <Header title="Atividades" buttonLabel="Nova atividade" />
        <Box as="article" mt="10">
          <ListTable>
            <ActivitiesTable data={data} />
          </ListTable>
        </Box>
      </Box>
    </AppLayout>
  )
}
