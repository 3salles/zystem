import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Input, FormLabel, Box, Textarea, FormControl } from '@chakra-ui/react'
import { api } from '../../services/api'
import { useForm } from '../../hooks/useForm'

interface ActivityFormProps {
  onClose: () => void
}

export const ActivityForm = ({ onClose }: ActivityFormProps) => {
  const { createActivity } = useForm()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const handleCreateNewActivity = async (event: FormEvent) => {
    event.preventDefault()
    await createActivity({ name, description })

    setName('')
    setDescription('')
    onClose()
  }
  return (
    <form id="drawer-form" onSubmit={handleCreateNewActivity}>
      <Box>
        <FormControl>
          <FormLabel>Nome da atividade</FormLabel>
          <Input
            placeholder="Digite nome da atividade"
            value={name}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setName(event.target.value)
            }
          />
        </FormControl>
        <FormControl mt="2">
          <FormLabel>Descrição</FormLabel>
          <Textarea
            placeholder="Digite descrição da atividade"
            resize={'none'}
            value={description}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
              setDescription(event.target.value)
            }
          />
        </FormControl>
      </Box>
    </form>
  )
}
