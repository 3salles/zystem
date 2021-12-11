import { Box, Flex, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import { formatHealth } from '../../helpers/formatHealth'
import { Rescued } from '../../models'

interface RescuedCard extends Rescued {
  campColor: string
}

interface RescuedCardProps {
  rescued: RescuedCard
}

export const RescuedCard = ({ rescued }: RescuedCardProps) => {
  return (
    <Box border="1px" borderColor="brand.500" borderRadius="md" p="4" w="100%">
      <Flex w="100%" justify="space-between">
        <Text>{rescued?.name}</Text>
        <Text>{rescued?.age} anos</Text>
        <Tag
          variant="unstyled"
          outline={`1px solid ${rescued?.campColor}`}
          color="white"
        >
          {rescued?.camp}
        </Tag>
        <Tag
          bg={
            rescued?.healthStatus === 'healthy' ? 'borders.400' : 'borders.300'
          }
          color="white"
        >
          {formatHealth(rescued?.healthStatus)}
        </Tag>
      </Flex>
    </Box>
  )
}