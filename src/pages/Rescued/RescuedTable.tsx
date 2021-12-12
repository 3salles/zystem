import React from 'react'

import { Tbody, Tr, Td, Flex, IconButton, Tag, Badge } from '@chakra-ui/react'

import { MdModeEdit } from 'react-icons/md'
import { Rescued } from '../../models'
import { formatHealth } from '../../helpers/formatHealth'
import { AlertModal } from '../../components/AlertModal'
import { useForm } from '../../hooks/useForm'

export interface RescuedCard extends Rescued {
  campColor: string
}

interface RescuedTableProps {
  data: RescuedCard[]
}

export const RescuedTable = ({ data }: RescuedTableProps) => {
  const { onOpenDrawer } = useForm()

  return (
    <>
      <Tbody>
        {data?.map((item) => (
          <Tr key={item?.id}>
            <Td>{item?.name}</Td>
            <Td>{item?.age} anos</Td>
            <Td>
              <Tag variant="unstyled" outline={`1px solid ${item?.campColor}`}>
                {item?.camp}
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
