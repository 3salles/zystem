import React from 'react'

import { Tbody, Tr, Td, Flex, IconButton, Tag, Badge } from '@chakra-ui/react'

import { MdModeEdit } from 'react-icons/md'

import { formatHealth } from '../../helpers/formatHealth'
import { AlertModal } from '../../components/AlertModal'
import { useForm } from '../../hooks/useForm'

export const RescuedTable = () => {
  const { onOpenDrawer, rescued } = useForm()

  return (
    <>
      <Tbody>
        {rescued?.map((item) => (
          <Tr key={item?.id}>
            <Td>{item?.name}</Td>
            <Td>{item?.age} anos</Td>
            <Td>
              <Tag
                variant="unstyled"
                outline={`1px solid ${item?.camp?.color}`}
              >
                {item?.camp?.name}
              </Tag>
            </Td>
            <Td>
              <Badge
                colorScheme={
                  item?.healthStatus === 'healthy' ? 'yellowGreen' : 'brightRed'
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
                  onClick={() => onOpenDrawer('rescued', 'Editar Resgatado')}
                />
                <AlertModal />
              </Flex>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </>
  )
}
