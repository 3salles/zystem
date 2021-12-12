import React from 'react'

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
import { CampForm } from './CampForm'
import { ActivityForm } from './ActivityForm'
import { FormsType } from '../../models'

interface DrawerFormProps {
  isOpen: boolean
  onClose: () => void
  typeForm: FormsType
  title: string
}

export const DrawerForm = ({
  isOpen,
  onClose,
  typeForm,
  title,
}: DrawerFormProps) => {
  const formType = (type: FormsType) => {
    switch (type) {
      case 'rescued':
        return <RescuedForm onClose={onClose} />
      case 'camp':
        return <CampForm onClose={onClose} />
      case 'activity':
        return <ActivityForm onClose={onClose} />
      default:
        return <></>
    }
  }
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
