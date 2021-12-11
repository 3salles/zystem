import React, { ReactNode } from 'react'

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from '@chakra-ui/react'
import { RescuedForm } from './RescuedForm'

type DrawersForm = 'camp' | 'activity' | 'rescued'
interface DrawerFormProps {
  isOpen: boolean
  onClose: () => void
  typeForm: DrawersForm
  title: string
}

const formType = (type: DrawersForm) => {
  switch (type) {
    case 'rescued':
      return <RescuedForm />
    default:
      return <></>
  }
}

export const DrawerForm = ({
  isOpen,
  onClose,
  typeForm,
  title,
}: DrawerFormProps) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={'md'}>
      <DrawerOverlay />
      <DrawerContent
        borderLeft="1px solid"
        borderLeftColor={'yellowGreen.100'}
        bg="brand.900"
      >
        <DrawerCloseButton />
        <DrawerHeader>{title}</DrawerHeader>

        <DrawerBody>{formType(typeForm)}</DrawerBody>

        <DrawerFooter>
          <Button
            variant="outline"
            colorScheme={'brightRed'}
            mr={3}
            onClick={onClose}
          >
            Cancelar
          </Button>
          <Button colorScheme="violet" type="submit" form="drawer-form">
            Salvar
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
