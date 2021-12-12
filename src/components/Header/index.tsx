import React from 'react'

import { Heading, Box, Flex, Button, IconButton } from '@chakra-ui/react'
import { FaPlus, FaArrowLeft } from 'react-icons/fa'
import { DrawersForm } from '../DrawerForm'
import { useForm } from '../../hooks/useForm'

interface HeaderProps {
  title: string
  buttonLabel: string
  typeForm: DrawersForm
}

export const Header = ({ title, buttonLabel, typeForm }: HeaderProps) => {
  const { onOpenDrawer } = useForm()
  return (
    <Box as="header" w="100%">
      <Heading as="h1" textAlign={'center'}>
        {title}
      </Heading>
      <Flex w="100%" justify={'space-between'}>
        <IconButton
          variant={'ghost'}
          aria-label="Voltar"
          icon={<FaArrowLeft />}
          _hover={{ bg: '0', color: 'violet.100' }}
          onClick={() => history.back()}
        />
        <Button
          leftIcon={<FaPlus />}
          bg="violet.500"
          _hover={{ opacity: 0.7 }}
          onClick={() => onOpenDrawer(typeForm, buttonLabel)}
        >
          {buttonLabel}
        </Button>
      </Flex>
    </Box>
  )
}
