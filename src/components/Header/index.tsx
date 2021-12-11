import React from 'react'

import { Heading, Box, Flex, Button } from '@chakra-ui/react'
import { FaPlus } from 'react-icons/fa'

interface HeaderProps {
  title: string
  buttonLabel: string
}

export const Header = ({ title, buttonLabel }: HeaderProps) => {
  return (
    <Box as="header" w="100%">
      <Heading as="h1" textAlign={'center'}>
        {title}
      </Heading>
      <Flex w="100%" justify={'flex-end'}>
        <Button leftIcon={<FaPlus />} bg="violet.500" _hover={{ opacity: 0.7 }}>
          {buttonLabel}
        </Button>
      </Flex>
    </Box>
  )
}
