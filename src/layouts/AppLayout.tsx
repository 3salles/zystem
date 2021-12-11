import React, { ReactNode } from 'react'
import { Sidebar } from '../components/Sidebar'

interface AppLayoutProps {
  children: ReactNode
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Sidebar>{children}</Sidebar>
    </>
  )
}
