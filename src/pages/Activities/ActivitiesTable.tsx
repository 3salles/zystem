import React from 'react'

import {
  Tbody,
  Tr,
  Td,
  Flex,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react'

import { MdModeEdit } from 'react-icons/md'
import { DrawerForm } from '../../components/DrawerForm'
import { AlertModal } from '../../components/AlertModal'
import { useForm } from '../../hooks/useForm'

export const ActivitiesTable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { activities } = useForm()

  return (
    <>
      <Tbody>
        {activities?.map((activity) => (
          <Tr key={activity?.id}>
            <Td>{activity?.name}</Td>
            <Td> {activity?.description}</Td>

            <Td>
              <Flex justify={'center'}>
                <IconButton
                  variant={'outline'}
                  aria-label="Editar"
                  border={0}
                  color="white"
                  icon={<MdModeEdit />}
                  _hover={{ bg: 'blue', color: 'white' }}
                  fontSize={'2xl'}
                  onClick={onOpen}
                />
                <AlertModal id={activity?.id} name={activity.name} />
              </Flex>
            </Td>
          </Tr>
        ))}
      </Tbody>
      <DrawerForm
        isOpen={isOpen}
        onClose={onClose}
        typeForm="activity"
        title="Editar atividade"
      />
    </>
  )
}
