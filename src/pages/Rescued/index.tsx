import React from 'react'
import { Box, Button, Container, Flex, Heading } from '@chakra-ui/react'
import { FaPlus } from 'react-icons/fa'

import { AppLayout } from '../../layouts/AppLayout'
import { ListTable } from '../../components/ListTable'

export const RescuedPage = () => {
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
          <ListTable />
        </Box>
      </Box>
    </AppLayout>
  )
}
