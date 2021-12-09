import React from 'react'
import { Drawer, DrawerContent, useDisclosure } from '@chakra-ui/react'

import { SidebarContent } from './SidebarContent'
import { MobileNav } from './MobileNav'

export function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent bg="brand.900">
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
    </>
  )
}
