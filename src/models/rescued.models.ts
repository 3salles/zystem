export type Blood = 'AB+' | 'AB-' | 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | '0-'
export type HealthStatus = 'healthy' | 'infected'

export interface Rescued {
  id: number
  name: string
  age: number
  blood: Blood
  skills: string
  injured: boolean
  healthStatus: HealthStatus
  invalid: boolean
  observation?: string
  camp: string
  activity: string
}
