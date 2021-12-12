import React from 'react'
import {
  Input,
  FormLabel,
  Box,
  Flex,
  Select,
  FormControl,
} from '@chakra-ui/react'
import { ColorPicker } from '../Colorpicker'

export const CampForm = () => {
  return (
    <form
      id="drawer-form"
      onSubmit={(event) => {
        event.preventDefault()
        console.log('Save camp')
      }}
    >
      <Box>
        <FormControl>
          <FormLabel>Nome</FormLabel>
          <Input placeholder="Digite nome do resgatado" />
        </FormControl>
        {/* TODO: Add react select */}
        <FormControl mt="2">
          <FormLabel>Resgatados</FormLabel>
          <Select placeholder="Selecione resgatados"></Select>
        </FormControl>
        <FormControl mt="2">
          <FormLabel>Atividade</FormLabel>
          <Select placeholder="Escolha uma atividade"></Select>
        </FormControl>
        <Flex mt="2">
          <FormControl>
            <FormLabel>Capacidade</FormLabel>
            <Input placeholder="Digite a capacidade" />
          </FormControl>
          <FormControl ml={3}>
            <FormLabel>Cor</FormLabel>
            <ColorPicker />
          </FormControl>
        </Flex>
      </Box>
    </form>
  )
}
