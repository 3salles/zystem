import { Flex, Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { Sidebar } from '../components/Sidebar'

interface AppLayoutProps {
  children: ReactNode
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <Box as="main" bg={'brand.900'} h="100vh">
      <Flex w="100%" justify={'space-between'}>
        <Sidebar />
        {children}
      </Flex>
    </Box>
  )
}
