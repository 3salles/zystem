import { Flex } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { Sidebar } from '../components/Sidebar'

interface AppLayoutProps {
  children: ReactNode
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Flex w="100%">
        <Sidebar />
        {children}
      </Flex>
    </>
  )
}
