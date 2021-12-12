import { Activity } from './activity.models'
import { Person} from './rescued.models'

export interface Camp {
  id: number
  name: string
  capacity: number
  occupied: number
  campers?: Person[] | null
  activities?: Activity[] | null
  color?: string
  totalInfected: number
  createdAt: string
}
