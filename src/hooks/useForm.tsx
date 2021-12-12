import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { DrawersForm } from '../components/DrawerForm'
import { Activity, Camp, Rescued } from '../models'
import { api } from '../services/api'

type ActivityInput = Omit<Activity, 'id' | 'createdAt'>

interface FormProviderProps {
  children: ReactNode
}

interface FormContextData {
  isDrawerOpen: boolean
  title: string
  typeForm: DrawersForm
  activities: Activity[]
  camps: Camp[]
  rescued: Rescued[]
  createActivity: (activity: ActivityInput) => Promise<void>
  deleteActivity: (id: number | undefined) => Promise<void>
  onOpenDrawer: (type: DrawersForm, title: string) => void
  onCloseDrawer: () => void
}

const FormContext = createContext<FormContextData>({} as FormContextData)

export const FormProvider = ({ children }: FormProviderProps) => {
  const [activities, setActivities] = useState<Activity[]>([])
  const [camps, setCamps] = useState<Camp[]>([])
  const [rescued, setRescued] = useState<Rescued[]>([])
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [typeForm, setTypeForm] = useState<DrawersForm>('activity')
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
    api.get('/api/people').then((response) => setRescued(response.data.people))
  }, [])

  const onOpenDrawer = (type: DrawersForm, title: string) => {
    setIsDrawerOpen(true)
    setTypeForm(type)
    setTitle(title)
  }

  const onCloseDrawer = () => {
    setIsDrawerOpen(false)
  }

  const createActivity = async (activityInput: ActivityInput) => {
    const response = await api.post('/activities', {
      ...activityInput,
      createdAt: new Date(),
    })

    const { activity } = response.data

    setActivities([...activities, activity])
  }

  const deleteActivity = async (id: number | undefined) => {
    await api.delete(`/activities/${id}`).then(() => {
      const newActivities = activities.filter((activity) => activity.id !== id)
      setActivities(newActivities)
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
        rescued,
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
