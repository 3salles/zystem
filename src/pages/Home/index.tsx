import * as React from 'react'
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Progress,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { AppLayout } from '../../layouts/AppLayout'
import { cardContent } from '../../utils/cardsContent'
import { NavigationCard } from '../../components/Cards/NavigationCard'
import { RescuedCard } from '../../components/Cards/RescuedCard'

export const Home = () => {
  return (
    <AppLayout>
      <Box as="section" color="white" w="100%" p="8" px="10" maxW={1480}>
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
            colorScheme={'red'}
            bg={'borders.400'}
          />
          <Flex justify={'space-between'}>
            <Text mt="1" fontSize={'xl'}>
              Infectados:
              <Text
                as="span"
                ml="2"
                fontFamily={'VT323'}
                color="borders.300"
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
                color="borders.400"
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
            <RescuedCard />
            <RescuedCard />
            <RescuedCard />
            <RescuedCard />
            <RescuedCard />
          </VStack>
        </Container>
      </Box>
    </AppLayout>
  )
}
