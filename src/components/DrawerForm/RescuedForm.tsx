import React, { ChangeEvent, FormEvent, useState } from 'react'
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
  useToast,
} from '@chakra-ui/react'
import { Blood, HealthStatus } from '../../models'
import { useForm } from '../../hooks/useForm'

const bloodOptions: Blood[] = ['AB+', 'AB-', 'A+', 'A-', 'B+', 'B-', 'O+', '0-']

interface RescuedFormProps {
  onClose: () => void
}

export const RescuedForm = ({ onClose }: RescuedFormProps) => {
  const { createPerson } = useForm()
  const toast = useToast()
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [blood, setBlood] = useState<Blood>('')
  const [skills, setSkills] = useState('')
  const [injured, setInjured] = useState(false)
  const [healthStatus, setHealthStatus] = useState<HealthStatus>('healthy')
  const [invalid, setInvalid] = useState(false)
  const [observation, setObservation] = useState('')
  const handleCreateNewRescued = async (event: FormEvent) => {
    try {
      event.preventDefault()
      await createPerson({
        name,
        age,
        blood,
        skills,
        injured,
        healthStatus,
        invalid,
        observation,
      })

      setName('')
      setAge(0)
      setBlood('')
      setSkills('')
      setInjured(false)
      setHealthStatus('healthy')
      setInvalid(false)
      setObservation('')
      onClose()
      toast({
        title: 'Resgatado cadastrado com sucesso!',
        status: 'success',
        isClosable: false,
      })
    } catch (error) {
      toast({
        title: 'Erro ao cadastrar resgatado!',
        description: 'Por favor, tente mais tarde',
        status: 'error',
        isClosable: false,
      })
    }
  }
  return (
    <form id="drawer-form" onSubmit={handleCreateNewRescued}>
      <Box>
        <FormControl>
          <FormLabel>Nome</FormLabel>
          <Input
            placeholder="Digite nome do resgatado"
            value={name}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setName(event?.target?.value)
            }
          />
        </FormControl>
        <Flex mt="2">
          <FormControl>
            <FormLabel>Idade</FormLabel>
            <Input
              placeholder="Digite a idade"
              value={age}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setAge(Number(event?.target?.value))
              }
            />
          </FormControl>
          <FormControl ml={3}>
            <FormLabel>Tipo sanguíneo</FormLabel>
            <Select
              placeholder="Selecione o tipo sanguíneo"
              value={blood}
              onChange={(event: any) => setBlood(event?.target?.value)}
            >
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
          <Textarea
            placeholder="Digite as habilidades"
            resize={'none'}
            value={skills}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
              setSkills(event?.target?.value)
            }
          />
        </FormControl>
        <Flex mt="2">
          <FormControl>
            <FormLabel>Está ferido?</FormLabel>
            <Switch
              size="lg"
              colorScheme={'violet'}
              isChecked={injured}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setInjured(event?.target?.checked)
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel>Está infectado?</FormLabel>
            <Switch
              size="lg"
              colorScheme={'violet'}
              checked={!healthStatus}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                if (event?.target?.checked) {
                  setHealthStatus('infected')
                }
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Pode trabalhar?</FormLabel>
            <Checkbox
              size="lg"
              colorScheme={'violet'}
              isChecked={invalid}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setInvalid(event?.target?.checked)
              }
            >
              Pode
            </Checkbox>
          </FormControl>
        </Flex>
        <FormControl mt="2">
          <FormLabel>Observação</FormLabel>
          <Textarea
            placeholder="Digite alguma observação sobre o resgatado"
            resize={'none'}
            value={observation}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
              setObservation(event?.target?.value)
            }
          />
        </FormControl>
      </Box>
    </form>
  )
}
