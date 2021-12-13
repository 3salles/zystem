import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  IconButton,
  useDisclosure,
  Button,
  Text,
  useToast,
} from '@chakra-ui/react'

import { MdDelete } from 'react-icons/md'
import { useForm } from '../../hooks/useForm'
import { FormsType } from '../../models'

interface AlertModalProps {
  id: number
  name: string
  typeForm: FormsType
}

export const AlertModal = ({ id, name, typeForm }: AlertModalProps) => {
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { deleteActivity, deletePerson, deleteCamp } = useForm()

  const handleOnDeleteAction = (id: number) => {
    try {
      if (typeForm === 'activity') {
        deleteActivity(id)
      } else if (typeForm === 'rescued') {
        deletePerson(id)
      } else if (typeForm === 'camp') {
        deleteCamp(id)
      }
      toast({
        title: 'Operação feita com sucesso!',
        status: 'success',
        isClosable: false,
      })
    } catch (error) {
      toast({
        title: 'Erro ao realizar esta operação!',
        description: 'Por favor, tente mais tarde',
        status: 'error',
        isClosable: false,
      })
    }
  }

  return (
    <>
      <IconButton
        variant={'outline'}
        aria-label="Excluir"
        border={0}
        color="white"
        icon={<MdDelete />}
        _hover={{ bg: 'brightRed.300', color: 'white' }}
        fontSize={'2xl'}
        ml="8"
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="brand.900">
          <ModalHeader>Excluir {name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text textAlign={'center'}>Deseja realmente excluir {name}?</Text>
            <Text textAlign={'center'} fontWeight={'bold'}>
              Esta operação não pode ser desfeita!
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="violet" mr={3} onClick={onClose}>
              NÃO
            </Button>
            <Button variant="outline" onClick={() => handleOnDeleteAction(id)}>
              SIM
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
