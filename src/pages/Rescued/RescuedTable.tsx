import React from 'react'

import { Tbody, Tr, Td, Flex, IconButton, Tag, Badge } from '@chakra-ui/react'

import { MdModeEdit } from 'react-icons/md'

import { formatHealth } from '../../helpers/formatHealth'
import { AlertModal } from '../../components/AlertModal'
import { useForm } from '../../hooks/useForm'

export const RescuedTable = () => {
  const { onOpenDrawer, people } = useForm()

  return (
    <>
      <Tbody>
        {people?.map((person) => (
          <Tr key={person?.id}>
            <Td>{person?.name}</Td>
            <Td>{person?.age} anos</Td>
            <Td>
              <Tag
                variant="unstyled"
                outline={`1px solid ${person?.camp?.color}`}
              >
                {person?.camp?.name}
              </Tag>
            </Td>
            <Td>
              <Badge
                colorScheme={
                  person?.healthStatus === 'healthy'
                    ? 'yellowGreen'
                    : 'brightRed'
                }
                color="white"
              >
                {formatHealth(person?.healthStatus)}
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
                <AlertModal
                  id={person?.id}
                  name={person?.name}
                  typeForm="rescued"
                />
              </Flex>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </>
  )
}
