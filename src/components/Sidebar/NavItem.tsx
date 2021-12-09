import React, { ReactText } from 'react'
import { Flex, Icon, Link, FlexProps } from '@chakra-ui/react'

import { IconType } from 'react-icons'

interface NavItemProps extends FlexProps {
  icon: IconType
  children: ReactText
}
export const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        color="white"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'brand.500',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            color="white"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  )
}
