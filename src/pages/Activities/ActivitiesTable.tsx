import React from 'react'

import { Tbody, Tr, Td, Flex, IconButton } from '@chakra-ui/react'

import { MdModeEdit } from 'react-icons/md'
import { AlertModal } from '../../components/AlertModal'
import { useForm } from '../../hooks/useForm'

export const ActivitiesTable = () => {
  const { activities, onOpenDrawer } = useForm()

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
                  onClick={() => onOpenDrawer('activity', 'Editar atividade')}
                />
                <AlertModal
                  id={activity?.id}
                  name={`Atividade ${activity?.name}`}
                  typeForm="activity"
                />
              </Flex>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </>
  )
}
