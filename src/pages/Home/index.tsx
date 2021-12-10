import * as React from 'react'
import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Progress,
  Text,
} from '@chakra-ui/react'
import { AppLayout } from '../../layouts/AppLayout'

import Background from '../../assets/background.jpeg'

export const Home = () => {
  return (
    <AppLayout>
      <Box as="section" color="white" w="100%" p="8">
        <Container>
          <Text fontSize="4xl" mb="2">
            Refugiados:
            <Text ml="2" as="span" fontFamily={'VT323'} color={'borders.400'}>
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
        </Container>
      </Box>
    </AppLayout>
  )
}
