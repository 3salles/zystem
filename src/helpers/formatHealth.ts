import { HealthStatus } from './../models/rescued.models'

export const formatHealth = (healthStatus: HealthStatus) => {
  switch (healthStatus) {
    case 'healthy':
      return 'Saudável'
    case 'infected':
      return 'Infectado'
    default:
      return ''
  }
}
