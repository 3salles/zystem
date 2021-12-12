import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

import { Activity, Camp, FormsType, Person } from '../models'
import { api } from '../services/api'

type ActivityInput = Omit<Activity, 'id' | 'createdAt'>
type CampInput = Omit<Camp, 'id' | 'createdAt'>
type PersonInput = Omit<Person, 'id' | 'createdAt' | 'camp'>

interface FormProviderProps {
  children: ReactNode
}

interface FormContextData {
  isDrawerOpen: boolean
  title: string
  typeForm: FormsType
  activities: Activity[]
  camps: Camp[]
  people: Person[]
  createActivity: (activity: ActivityInput) => Promise<void>
  createCamp: (camp: CampInput) => Promise<void>
  createPerson: (person: PersonInput) => Promise<void>
  deleteActivity: (id: number) => Promise<void>
  deletePerson: (id: number) => Promise<void>
  onOpenDrawer: (type: FormsType, title: string) => void
  onCloseDrawer: () => void
}

const FormContext = createContext<FormContextData>({} as FormContextData)

export const FormProvider = ({ children }: FormProviderProps) => {
  const [activities, setActivities] = useState<Activity[]>([])
  const [camps, setCamps] = useState<Camp[]>([])
  const [people, setPeople] = useState<Person[]>([])
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [typeForm, setTypeForm] = useState<FormsType>('activity')
  const [title, setTitle] = useState('')

  useEffect(() => {
    api
      .get('/api/activities')
      .then((response) => setActivities(response.data.activities))
  }, [])

  useEffect(() => {
    api.get('/api/camps').then((response) => setCamps(response.data.camps))
  }, [])

  useEffect(() => {
    api.get('/api/people').then((response) => setPeople(response.data.people))
  }, [])

  const onOpenDrawer = (type: FormsType, title: string) => {
    setIsDrawerOpen(true)
    setTypeForm(type)
    setTitle(title)
  }

  const onCloseDrawer = () => {
    setIsDrawerOpen(false)
  }

  const createActivity = async (activityInput: ActivityInput) => {
    const response = await api.post('/api/activities', {
      ...activityInput,
      createdAt: new Date(),
    })

    const { activity } = response.data

    setActivities([...activities, activity])
  }

  const createPerson = async (personInput: PersonInput) => {
    const response = await api.post('/api/people', {
      ...personInput,
      createdAt: new Date(),
    })

    const { person } = response.data

    setPeople([...people, person])
  }

  const createCamp = async (campInput: CampInput) => {
    const response = await api.post('/api/camps', {
      ...campInput,
      createdAt: new Date(),
    })

    const { camp } = response.data
    setCamps([...camps, camp])
  }

  const deleteActivity = async (id: number) => {
    await api.delete(`api/activities/${id}`).then(() => {
      const newActivities = activities.filter((activity) => activity?.id !== id)
      setActivities(newActivities)
    })
  }

  const deletePerson = async (id: number) => {
    await api.delete(`/api/people/${id}`).then(() => {
      const newPeople = people.filter((person) => person?.id !== id)
      setPeople(newPeople)
    })
  }

  return (
    <FormContext.Provider
      value={{
        typeForm,
        title,
        isDrawerOpen,
        onCloseDrawer,
        onOpenDrawer,
        activities,
        createActivity,
        deleteActivity,
        camps,
        createCamp,
        people,
        createPerson,
        deletePerson,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export const useForm = () => {
  const context = useContext(FormContext)

  return context
}
