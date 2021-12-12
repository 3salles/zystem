import { Camp } from "./camp.models"

export type Blood = 'AB+' | 'AB-' | 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | '0-' | ''
export type HealthStatus = 'healthy' | 'infected' 

export interface Person {
  id: number
  name: string
  age: number
  blood: Blood
  skills: string
  injured: boolean
  healthStatus: HealthStatus
  invalid: boolean
  observation: string
  camp: Camp
  createdAt: string
}
