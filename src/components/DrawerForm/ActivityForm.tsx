import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Input, FormLabel, Box, Textarea, FormControl } from '@chakra-ui/react'
import { api } from '../../services/api'

interface ActivityFormProps {
  onClose: () => void
}

export const ActivityForm = ({ onClose }: ActivityFormProps) => {
  const [activityName, setActivityName] = useState('')
  const [activityDescription, setActivityDescription] = useState('')

  const handleCreateNewActivity = (event: FormEvent) => {
    event.preventDefault()
    const data = { activityName, activityDescription }
    api.post('/activities', data)
    setActivityName('')
    setActivityDescription('')
    onClose()
  }
  return (
    <form id="drawer-form" onSubmit={handleCreateNewActivity}>
      <Box>
        <FormControl>
          <FormLabel>Nome da atividade</FormLabel>
          <Input
            placeholder="Digite nome da atividade"
            value={activityName}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setActivityName(event.target.value)
            }
          />
        </FormControl>
        <FormControl mt="2">
          <FormLabel>Descrição</FormLabel>
          <Textarea
            placeholder="Digite descrição da atividade"
            resize={'none'}
            value={activityDescription}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
              setActivityDescription(event.target.value)
            }
          />
        </FormControl>
      </Box>
    </form>
  )
}
