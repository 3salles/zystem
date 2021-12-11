import { Activity } from './activity.models'
import { Rescued } from './rescued.models'

export interface Camp {
  name: string
  capacity: number
  occupied: number
  campers: Rescued[]
  activities: Activity[]
  color?: string
}
