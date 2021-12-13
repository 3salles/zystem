import React, { useEffect } from 'react'
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
import { useForm } from '../../hooks/useForm'
import { sortFunctionByHour } from '../../helpers/sortFuncionByHour'

export const Home = () => {
  const { people } = useForm()

  const sortedPeople = people.sort(sortFunctionByHour)

  const infectedPeople = people?.reduce(
    (accumulator, person) => {
      if (person?.healthStatus === 'infected') {
        accumulator.total += 1
      }
      return accumulator
    },
    {
      total: 0,
    },
  )

  const infectedPercentage = (
    (100 * infectedPeople?.total) /
    people?.length
  ).toFixed(2)

  return (
    <AppLayout>
      <Box as="section" w="100%" p="4" maxW={1480}>
        <Container>
          <Heading as="h1" mb="2">
            Refugiados:
            <Text ml="2" as="span" fontFamily={'VT323'} color={'borders.200'}>
              {people.length}
            </Text>
          </Heading>
          <Progress
            size={'lg'}
            value={infectedPeople?.total}
            max={people.length}
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
                {infectedPercentage} %
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
                {100 - Number(infectedPercentage)} %
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
            {sortedPeople?.slice(0, 5)?.map((person) => (
              <RescuedCard key={person?.id} rescued={person} />
            ))}
          </VStack>
        </Container>
      </Box>
    </AppLayout>
  )
}
