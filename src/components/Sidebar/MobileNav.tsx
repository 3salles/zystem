import React from 'react'
import { IconButton, Flex, FlexProps, Image } from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'

import Logo from '../../assets/logo.png'

interface MobileProps extends FlexProps {
  onOpen: () => void
}
export const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      borderBottomWidth="1px"
      borderBottomColor={'yellowGreen.100'}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        borderColor={'yellowGreen.100'}
        color="yellowGreen.100"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Image ml="8" src={Logo} alt="Zystem" />
    </Flex>
  )
}
