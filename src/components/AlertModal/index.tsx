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
} from '@chakra-ui/react'

import { MdDelete } from 'react-icons/md'

export const AlertModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
          <ModalHeader>Excluir fulano</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text textAlign={'center'}>Deseja realmente excluir fulano?</Text>
            <Text textAlign={'center'} fontWeight={'bold'}>
              Esta operação não pode ser desfeita!
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="violet" mr={3} onClick={onClose}>
              NÃO
            </Button>
            <Button variant="outline">SIM</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
