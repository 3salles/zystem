import React from 'react'
import { useLocation } from 'react-router-dom'
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
  link: string
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Início', icon: FiHome, link: '/' },
  { name: 'Resgatados', icon: ImUsers, link: '/rescued' },
  { name: 'Acampamentos', icon: GiCampfire, link: '/camps' },
  { name: 'Atividades', icon: HiOutlineClipboardList, link: '/activities' },
]

interface SidebarContentProps extends BoxProps {
  onClose: () => void
}

export const SidebarContent = ({ onClose, ...rest }: SidebarContentProps) => {
  const location = useLocation()

  return (
    <Box
      borderRight="1px"
      borderRightColor={'borders.400'}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        h="20"
        alignItems="center"
        mx="8"
        justifyContent="space-between"
        mb="10"
      >
        <Image src={Logo} alt="Zystem" />
        <CloseButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onClose}
          color={'brand.500'}
        />
      </Flex>
      {LinkItems.map((option) => (
        <NavItem
          key={option.name}
          icon={option.icon}
          link={option.link}
          isActive={option.link === location.pathname}
        >
          {option.name}
        </NavItem>
      ))}
    </Box>
  )
}
