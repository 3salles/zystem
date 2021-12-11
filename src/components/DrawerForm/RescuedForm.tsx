import React from 'react'
import {
  Input,
  FormLabel,
  Box,
  Flex,
  Select,
  Textarea,
  Switch,
  FormControl,
  Checkbox,
} from '@chakra-ui/react'
import { Blood } from '../../models'

const bloodOptions: Blood[] = ['AB+', 'AB-', 'A+', 'A-', 'B+', 'B-', 'O+', '0-']

export const RescuedForm = () => {
  return (
    <form
      id="drawer-form"
      onSubmit={(event) => {
        event.preventDefault()
        console.log('Save rescued')
      }}
    >
      <Box>
        <FormControl>
          <FormLabel>Nome</FormLabel>
          <Input placeholder="Digite nome do resgatado" />
        </FormControl>
        <Flex mt="2">
          <FormControl>
            <FormLabel>Idade</FormLabel>
            <Input placeholder="Digite a idade" />
          </FormControl>
          <FormControl ml={3}>
            <FormLabel>Tipo sanguíneo</FormLabel>
            <Select placeholder="Selecione o tipo sanguíneo">
              {bloodOptions?.map((blood, index) => (
                <option key={index} value={blood}>
                  {blood}
                </option>
              ))}
            </Select>
          </FormControl>
        </Flex>
        <FormControl mt="2">
          <FormLabel>Habilidades</FormLabel>
          <Textarea placeholder="Digite as habilidades" resize={'none'} />
        </FormControl>
        <Flex mt="2">
          <FormControl>
            <FormLabel>Está ferido?</FormLabel>
            <Switch size="lg" colorScheme={'violet'} />
          </FormControl>
          <FormControl>
            <FormLabel>Está infectado?</FormLabel>
            <Switch size="lg" colorScheme={'violet'} />
          </FormControl>
          <FormControl>
            <FormLabel>Pode trabalhar?</FormLabel>
            <Checkbox size="lg" colorScheme={'violet'}>
              Pode
            </Checkbox>
          </FormControl>
        </Flex>
        <FormControl mt="2">
          <FormLabel>Acampamento</FormLabel>
          <Select placeholder="Escolha um acampamento"></Select>
        </FormControl>
        <FormControl mt="2">
          <FormLabel>Atividade</FormLabel>
          <Select placeholder="Escolha uma atividade"></Select>
        </FormControl>
        <FormControl mt="2">
          <FormLabel>Observação</FormLabel>
          <Textarea
            placeholder="Digite alguma observação sobre o resgatado"
            resize={'none'}
          />
        </FormControl>
      </Box>
    </form>
  )
}
