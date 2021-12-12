import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { Activity } from '../models'
import { api } from '../services/api'

type ActivityInput = Omit<Activity, 'id' | 'createdAt'>

interface FormProviderProps {
  children: ReactNode
}

interface FormContextData {
  activities: Activity[]
  createActivity: (activity: ActivityInput) => Promise<void>
  deleteActivity: (id: number | undefined) => Promise<void>
}

const FormContext = createContext<FormContextData>({} as FormContextData)

export const FormProvider = ({ children }: FormProviderProps) => {
  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    api
      .get('activities')
      .then((response) => setActivities(response.data.activities))
  }, [])

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
      value={{ activities, createActivity, deleteActivity }}
    >
      {children}
    </FormContext.Provider>
  )
}

export const useForm = () => {
  const context = useContext(FormContext)

  return context
}
