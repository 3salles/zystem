import React, { ChangeEvent, FormEvent, useState } from 'react'
import ReactSelect from 'react-select'
import {
  Input,
  FormLabel,
  Box,
  Flex,
  Select,
  FormControl,
  useToast,
} from '@chakra-ui/react'
import { ColorPicker } from '../Colorpicker'
import { useForm } from '../../hooks/useForm'
import { Activity, Person } from '../../models'
import { ReactSelectStyles, SelectTheme } from '../../styles/selectStyles'

interface CampFormProps {
  onClose: () => void
}

interface RescuedOption {
  label: string
  value: Person
}

interface ActivityOption {
  label: string
  value: Activity
}

export const CampForm = ({ onClose }: CampFormProps) => {
  const { activities, people, createCamp } = useForm()
  const toast = useToast()
  const [name, setName] = useState('')
  const [capacity, setCapacity] = useState(1)
  const [campers, setCampers] = useState<Person[]>([])
  const [campActivities, setCampActivities] = useState<Activity[]>([])
  const [color, setColor] = useState('gray.500')

  const rescuedOptions: RescuedOption[] = people?.map((person) => {
    return {
      label: person?.name,
      value: person,
    }
  })

  const activityOptions: ActivityOption[] = activities?.map((activity) => {
    return {
      label: activity?.name,
      value: activity,
    }
  })

  const handleCreateCamp = async (event: FormEvent) => {
    try {
      event.preventDefault()

      await createCamp({
        name,
        capacity,
        campers,
        activities: campActivities,
        color,
      })

      setName('')
      setCapacity(1)
      setCampers([])
      setCampActivities([])
      setColor('gray.500')
      onClose()

      toast({
        title: 'Acampamento cadastrado com sucesso!',
        status: 'success',
        isClosable: false,
      })
    } catch (erro) {
      toast({
        title: 'Erro ao cadastrar acampamento!',
        description: 'Por favor, tente mais tarde',
        status: 'error',
        isClosable: false,
      })
    }
  }

  return (
    <form id="drawer-form" onSubmit={handleCreateCamp}>
      <Box>
        <FormControl>
          <FormLabel>Nome</FormLabel>
          <Input
            placeholder="Digite nome do acampamento"
            value={name}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setName(event?.target?.value)
            }
          />
        </FormControl>
        <FormControl mt="2">
          <FormLabel>Campers</FormLabel>
          <ReactSelect
            theme={SelectTheme}
            styles={ReactSelectStyles}
            placeholder="Selecione resgatados"
            isMulti
            closeMenuOnSelect={false}
            name="campers"
            options={rescuedOptions}
            onChange={(event: any) =>
              setCampers([
                ...event?.map((option: RescuedOption) => option?.value),
              ])
            }
          />
        </FormControl>
        <FormControl mt="2">
          <FormLabel>Atividades</FormLabel>
          <ReactSelect
            theme={SelectTheme}
            styles={ReactSelectStyles}
            placeholder="Selecione atividades"
            isMulti
            closeMenuOnSelect={false}
            name="activities"
            options={activityOptions}
            onChange={(event: any) =>
              setCampActivities([
                ...event?.map((option: ActivityOption) => option?.value),
              ])
            }
          />
        </FormControl>
        <Flex mt="2">
          <FormControl>
            <FormLabel>Capacidade</FormLabel>
            <Input
              placeholder="Digite a capacidade"
              value={capacity}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setCapacity(Number(event?.target?.value))
              }
            />
          </FormControl>
          <FormControl ml={3}>
            <FormLabel>Cor</FormLabel>
            <ColorPicker color={color} setColor={setColor} />
          </FormControl>
        </Flex>
      </Box>
    </form>
  )
}
