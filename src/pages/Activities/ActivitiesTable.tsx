import React from 'react'

import { useTable, usePagination } from 'react-table'
import {
  Tbody,
  Tr,
  Td,
  Flex,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react'

import { MdModeEdit } from 'react-icons/md'
import { Activity } from '../../models'
import { DrawerForm } from '../../components/DrawerForm'
import { AlertModal } from '../../components/AlertModal'

interface ActivitiesTableProps {
  data: Activity[]
}

export const ActivitiesTable = ({ data }: ActivitiesTableProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Tbody>
        {data?.map((item) => (
          <Tr key={item?.id}>
            <Td>{item?.name}</Td>
            <Td> {item?.description}</Td>

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
                <AlertModal />
              </Flex>
            </Td>
          </Tr>
        ))}
      </Tbody>
      <DrawerForm
        isOpen={isOpen}
        onClose={onClose}
        typeForm="camp"
        title="Novo acampamento"
      />
    </>
  )
}
