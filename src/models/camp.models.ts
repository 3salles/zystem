import { Activity } from './activity.models'
import { Rescued } from './rescued.models'

export interface Camp {
  id: number
  name: string
  capacity: number
  occupied: number
  campers?: Rescued[] | null
  activities?: Activity[] | null
  color?: string
  totalInfected: number
}
