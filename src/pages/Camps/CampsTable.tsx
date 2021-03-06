import React from 'react'

import { Tbody, Tr, Td, Flex, IconButton, Box, Badge } from '@chakra-ui/react'

import { MdModeEdit } from 'react-icons/md'

import { AlertModal } from '../../components/AlertModal'
import { useForm } from '../../hooks/useForm'

export const CampsTable = () => {
  const { onOpenDrawer, camps } = useForm()

  return (
    <>
      <Tbody>
        {camps?.map((camp) => (
          <Tr key={camp?.id}>
            <Td>
              <Box bg={camp?.color} h={4} />
            </Td>
            <Td>{camp?.name}</Td>
            <Td> máx. {camp?.capacity} pessoas</Td>
            <Td>
              {camp?.campers?.length === camp?.capacity ? (
                <Badge colorScheme={'brightRed'} color="white">
                  Lotado
                </Badge>
              ) : (
                camp?.campers?.length + ' pessoas'
              )}
            </Td>
            <Td fontWeight={'bold'} color="borders.200">
              {
                camp?.campers?.filter(
                  (camper) => camper?.healthStatus !== 'healthy',
                ).length
              }
              {''} infectado(s)
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
                <AlertModal id={camp?.id} name={camp?.name} typeForm="camp" />
              </Flex>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </>
  )
}
