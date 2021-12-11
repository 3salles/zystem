import React from 'react'
import { Input, FormLabel, Box, Textarea, FormControl } from '@chakra-ui/react'

export const ActivityForm = () => {
  return (
    <form
      id="drawer-form"
      onSubmit={(event) => {
        event.preventDefault()
        console.log('Save activity')
      }}
    >
      <Box>
        <FormControl>
          <FormLabel>Nome da atividade</FormLabel>
          <Input placeholder="Digite nome da atividade" />
        </FormControl>
        <FormControl mt="2">
          <FormLabel>Descrição</FormLabel>
          <Textarea
            placeholder="Digite descrição da atividade"
            resize={'none'}
          />
        </FormControl>
      </Box>
    </form>
  )
}
