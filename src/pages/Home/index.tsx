import * as React from 'react'
import {
  Box,
  Container,
  Flex,
  Heading,
  Progress,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { AppLayout } from '../../layouts/AppLayout'
import { cardContent } from '../../utils/cardsContent'
import { NavigationCard } from '../../components/Cards/NavigationCard'
import { RescuedCard } from '../../components/Cards/RescuedCard'

import rescued from '../../utils/rescued.json'
import { Rescued } from '../../models'

interface CustomRescued extends Rescued {
  campColor: string
}

export const Home = () => {
  const data = rescued as CustomRescued[]
  return (
    <AppLayout>
      <Box as="section" w="100%" p="4" maxW={1480}>
        <Container>
          <Heading as="h1" mb="2">
            Refugiados:
            <Text ml="2" as="span" fontFamily={'VT323'} color={'borders.200'}>
              289
            </Text>
          </Heading>
          <Progress
            size={'lg'}
            value={30}
            max={289}
            colorScheme={'brightRed'}
            bg={'yellowGreen.100'}
          />
          <Flex justify={'space-between'}>
            <Text mt="1" fontSize={'xl'}>
              Infectados:
              <Text
                as="span"
                ml="2"
                fontFamily={'VT323'}
                color="brightRed.100"
                fontSize={'3xl'}
              >
                30%
              </Text>
            </Text>
            <Text mt="1" fontSize={'xl'}>
              Saudáveis:
              <Text
                as="span"
                ml="2"
                fontFamily={'VT323'}
                color="yellowGreen.100"
                fontSize={'3xl'}
              >
                70%
              </Text>
            </Text>
          </Flex>
        </Container>
        <Stack direction={['column', 'row']} spacing={4} mt="8">
          {cardContent.map((content, index) => (
            <NavigationCard key={index} cardContent={content} />
          ))}
        </Stack>
        <Container w="100%">
          <Heading as="h2" mt="6" mb="4">
            Resgatados recentemente
          </Heading>
          <VStack w="100%" spacing={4}>
            {data?.map((rescued) => (
              <RescuedCard key={rescued.id} rescued={rescued} />
            ))}
          </VStack>
        </Container>
      </Box>
    </AppLayout>
  )
}
