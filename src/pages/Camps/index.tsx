import React from 'react'
import { Box } from '@chakra-ui/react'

import { AppLayout } from '../../layouts/AppLayout'
import { Header } from '../../components/Header'

import camps from '../../utils/camps.json'
import { Camp } from '../../models'
import { ListTable } from '../../components/ListTable'
import { CampsTable } from './CampsTable'

type CustomCamp = Omit<Camp, 'campers' | 'activities'>

export const CampsPage = () => {
  const data = camps as CustomCamp[]
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
            <CampsTable data={data} />
          </ListTable>
        </Box>
      </Box>
    </AppLayout>
  )
}
