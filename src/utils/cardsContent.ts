import { NavigationCardContent } from '../models'

import Camp from '../assets/camp.webp'
import People from '../assets/rescued.jpg'
import Activities from '../assets/skills.png'
export const cardContent: NavigationCardContent[] = [
  {
    img: Camp,
    alt: 'Acampamento de sobrevivência durante um apocalipse zumbi',
    route: '/camps',
    ariaLabel: 'Ver acampamento',
    label: 'ACAMPAMENTO',
    color: 'borders.700',
  },
  {
    img: People,
    alt: 'Pessoas refugiadas durante um apocalipse zumbi',
    route: '/rescued',
    ariaLabel: 'Ver resgatados',
    label: 'RESGATADOS',
    color: 'borders.200',
  },
  {
    img: Activities,
    alt: 'Imagem para ilustrar atividades em um acampamento durante um apocalipse zumbi',
    route: '/activities',
    ariaLabel: 'Ver atividades',
    label: 'ATIVIDADES',
    color: 'borders.400',
  },
]
