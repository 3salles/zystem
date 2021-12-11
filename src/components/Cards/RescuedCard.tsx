import { Box, Flex, Tag, Text } from '@chakra-ui/react'
import React from 'react'

export const RescuedCard = () => {
  return (
    <Box border="1px" borderColor="brand.500" borderRadius="md" p="4" w="100%">
      <Flex justify={'space-between'} w="100%">
        <Text>Adria</Text>
        <Text>24 anos</Text>
        <Text>Acampamento</Text>
        <Tag bg="borders.400" color="white">
          SAUDÁVEL
        </Tag>
      </Flex>
    </Box>
  )
}
