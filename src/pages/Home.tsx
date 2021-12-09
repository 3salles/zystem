import * as React from 'react'
import { Box, Flex, Image } from '@chakra-ui/react'
import Logo from '../assets/logo.png'

export function Home() {
  return (
    <Box>
      <Flex as="header" p="2">
        <Image src={Logo} alt="Zystem" />
      </Flex>
    </Box>
  )
}
