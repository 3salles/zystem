import React from 'react'

import { useTable, usePagination } from 'react-table'
import {
  Table,
  Tbody,
  Tr,
  Td,
  Flex,
  IconButton,
  Tag,
  Badge,
  useDisclosure,
} from '@chakra-ui/react'

import { MdModeEdit } from 'react-icons/md'
import { Rescued } from '../../models'
import { formatHealth } from '../../helpers/formatHealth'
import { DrawerForm } from '../DrawerForm'
import { AlertModal } from '../AlertModal'

export interface RescuedCard extends Rescued {
  campColor: string
}

interface ListTableProps {
  data: RescuedCard[]
}

export const ListTable = ({ data }: ListTableProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Table variant="simple" colorScheme={'violet'}>
        <Tbody>
          {data?.map((item) => (
            <Tr key={item?.id}>
              <Td>{item?.name}</Td>
              <Td>{item?.age} anos</Td>
              <Td>
                <Tag
                  variant="unstyled"
                  outline={`1px solid ${item?.campColor}`}
                >
                  {item?.camp}
                </Tag>
              </Td>
              <Td>
                <Badge
                  colorScheme={
                    item?.healthStatus === 'healthy'
                      ? 'yellowGreen'
                      : 'brightRed'
                  }
                  color="white"
                >
                  {formatHealth(item?.healthStatus)}
                </Badge>
              </Td>
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
      </Table>
      <DrawerForm isOpen={isOpen} onClose={onClose} />
    </>
  )
}
