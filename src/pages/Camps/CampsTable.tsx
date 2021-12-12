import React from 'react'

import { Tbody, Tr, Td, Flex, IconButton, Box, Badge } from '@chakra-ui/react'

import { MdModeEdit } from 'react-icons/md'
import { Camp } from '../../models'

import { AlertModal } from '../../components/AlertModal'
import { useForm } from '../../hooks/useForm'

interface CampsTableProps {
  data: Camp[]
}

export const CampsTable = ({ data }: CampsTableProps) => {
  const { onOpenDrawer } = useForm()

  return (
    <>
      <Tbody>
        {data?.map((item) => (
          <Tr key={item?.id}>
            <Td>
              <Box bg={item?.color} h={4} />
            </Td>
            <Td>{item?.name}</Td>
            <Td> máx. {item?.capacity} pessoas</Td>
            <Td>
              {item?.occupied === item?.capacity ? (
                <Badge colorScheme={'brightRed'} color="white">
                  Lotado
                </Badge>
              ) : (
                item?.occupied + ' pessoas'
              )}{' '}
            </Td>
            <Td fontWeight={'bold'} color="borders.200">
              {item?.totalInfected} infectados
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
                  onClick={() => onOpenDrawer('camp', 'Editar acampamento')}
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
