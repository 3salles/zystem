import React from 'react'

import { useTable, usePagination } from 'react-table'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  IconButton,
  Tag,
  Badge,
} from '@chakra-ui/react'
import { GrEdit } from 'react-icons/gr'
import { MdDelete } from 'react-icons/md'

export const ListTable = () => {
  return (
    <Table variant="striped" colorScheme={'violet'}>
      {/* <Thead>
        <Tr>
          <Th>To convert</Th>
          <Th>into</Th>
          <Th></Th>
        </Tr>
      </Thead> */}
      <Tbody>
        <Tr>
          <Td>Luna Williams</Td>
          <Td>16 anos</Td>
          <Td>
            <Badge>Acampamento</Badge>
          </Td>
          <Td>
            <Tag bg="" color="white">
              Saudável
            </Tag>
          </Td>
          <Td>
            <Flex alignItems={'flex-end'} w="full">
              <IconButton
                variant={'outline'}
                aria-label="Editar"
                icon={<GrEdit />}
              />
              <IconButton aria-label="Excluir" icon={<MdDelete />} ml="8" />
            </Flex>
          </Td>
        </Tr>
        <Tr>
          <Td>feet</Td>
          <Td>centimetres (cm)</Td>
          <Td isNumeric>30.48</Td>
        </Tr>
        <Tr>
          <Td>yards</Td>
          <Td>metres (m)</Td>
          <Td isNumeric>0.91444</Td>
        </Tr>
      </Tbody>
    </Table>
  )
}
