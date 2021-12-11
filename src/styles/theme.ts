import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    brand: {
      300: '#C31011',
      900: '#0C1015',
    },
    borders: {
      200: '#F1BE65',
      300: '#EE3132',
      400: '#AEAD47',
      700: '#25B8D5',
    },
    violet: {
      50: '#E200E2',
      100: '#CE00CE',
      200: '#BA00BA',
      300: '#A700A7',
      400: '#930093',
      500: '#800080',
      600: '#6C006C',
      700: '#580058',
      800: '#450045',
      900: '#310031',
    }
  },
  fonts: {
    heading: 'Raleway',
    body: 'Open Sans',
  },
  styles: {
    global: {
      body: {
        bg: 'brand.900',
        color: 'white',
      },
    },
  },
})
