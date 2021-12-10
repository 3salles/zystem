import * as React from 'react'
import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Progress,
  Stack,
  Text,
} from '@chakra-ui/react'
import { AppLayout } from '../../layouts/AppLayout'
import { Card } from '../../components/Card'
import { cardContent } from '../../utils/cardsContent'

export const Home = () => {
  return (
    <AppLayout>
      <Box ml={240} as="section" color="white" w="100%" p="8">
        <Container>
          <Text fontSize="4xl" mb="2">
            Refugiados:
            <Text ml="2" as="span" fontFamily={'VT323'} color={'borders.200'}>
              289
            </Text>
          </Text>
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
            <Card key={index} card={content} />
          ))}
        </Stack>
      </Box>
    </AppLayout>
  )
}
