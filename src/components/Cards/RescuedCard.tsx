import { Badge, Box, Flex, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import { formatHealth } from '../../helpers/formatHealth'
import { Person } from '../../models'

interface RescuedCardProps {
  rescued: Person
}

export const RescuedCard = ({ rescued }: RescuedCardProps) => {
  return (
    <Box border="1px" borderColor="violet.500" borderRadius="md" p="4" w="100%">
      <Flex w="100%" justify="space-between">
        <Text>{rescued?.name}</Text>
        <Text>{rescued?.age} anos</Text>
        <Tag
          variant="unstyled"
          outline={`1px solid ${rescued?.camp?.color}`}
          color="white"
        >
          {rescued?.camp?.name}
        </Tag>
        <Badge
          variant={'subtle'}
          colorScheme={
            rescued?.healthStatus === 'healthy' ? 'yellowGreen' : 'brightRed'
          }
          color="white"
        >
          {formatHealth(rescued?.healthStatus)}
        </Badge>
      </Flex>
    </Box>
  )
}
