import React from 'react'
import { Box, CloseButton, Flex, BoxProps, Image } from '@chakra-ui/react'
import { FiHome } from 'react-icons/fi'
import { GiCampfire } from 'react-icons/gi'
import { HiOutlineClipboardList } from 'react-icons/hi'
import { ImUsers } from 'react-icons/im'
import { IconType } from 'react-icons'
import { NavItem } from './NavItem'

import Logo from '../../assets/logo.png'

interface LinkItemProps {
  name: string
  icon: IconType
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Início', icon: FiHome },
  { name: 'Resgatados', icon: ImUsers },
  { name: 'Acampamentos', icon: GiCampfire },
  { name: 'Atividades', icon: HiOutlineClipboardList },
]

interface SidebarProps extends BoxProps {
  onClose: () => void
}

export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      borderRight="1px"
      borderRightColor={'borders.700'}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Image src={Logo} alt="Zystem" />
        <CloseButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onClose}
          color={'brand.500'}
        />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}
