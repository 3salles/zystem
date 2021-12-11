import React from 'react'
import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import { FaPlus } from 'react-icons/fa'

import { AppLayout } from '../../layouts/AppLayout'
import { ListTable } from '../../components/ListTable'

import rescued from '../../utils/rescued.json'
import { RescuedCard } from '../../components/Cards/RescuedCard'

export const RescuedPage = () => {
  const data = rescued as RescuedCard[]
  return (
    <AppLayout>
      <Box as="section" w="100%" p="4" maxW={1480}>
        <Box as="header" w="100%">
          <Heading as="h1" textAlign={'center'}>
            Resgatados
          </Heading>
          <Flex w="100%" justify={'flex-end'}>
            <Button
              leftIcon={<FaPlus />}
              bg="violet.500"
              _hover={{ opacity: 0.7 }}
            >
              Novo Resgatado
            </Button>
          </Flex>
        </Box>
        <Box as="article" mt="10">
          <ListTable data={data} />
        </Box>
      </Box>
    </AppLayout>
  )
}
