import { Activity } from './activity.models'
import { Person} from './rescued.models'

export interface Camp {
  id: number
  name: string
  capacity: number
  campers: Person[] 
  activities: Activity[] 
  color: string
  createdAt: string
}
