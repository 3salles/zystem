import { HealthStatus } from './../models/rescued.models';

export const formatHealth = (healthStatus: HealthStatus) => {
  switch(healthStatus){
    case 'healthy':
      return 'SAUDÁVEL'
    case 'infected':
      return 'INFECTADO'
      default:
        return ''
  }
}