import React, { ChangeEvent, FormEvent, useState } from 'react'
import {
  Input,
  FormLabel,
  Box,
  Textarea,
  FormControl,
  useToast,
} from '@chakra-ui/react'
import { useForm } from '../../hooks/useForm'

interface ActivityFormProps {
  onClose: () => void
}

export const ActivityForm = ({ onClose }: ActivityFormProps) => {
  const { createActivity } = useForm()
  const toast = useToast()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const handleCreateNewActivity = async (event: FormEvent) => {
    try {
      event.preventDefault()
      await createActivity({ name, description })

      setName('')
      setDescription('')
      onClose()
      toast({
        title: 'Atividade cadastrada com sucesso!',
        status: 'success',
        isClosable: false,
      })
    } catch (error) {
      toast({
        title: 'Erro ao cadastrar a atividade!',
        description: 'Por favor, tente mais tarde',
        status: 'error',
        isClosable: false,
      })
    }
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
