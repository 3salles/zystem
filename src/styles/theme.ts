import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    brand: {
      100: '#FFFFFF',
      300: '#C31011;',
      500: '#800080',
      900: '#0C1015',
    },
    borders: {
      200: '#F1BE65',
      300: '#EE3132',
      400: '#AEAD47',
      700: '#25B8D5',
    },
  },
  fonts: {
    heading: 'Raleway',
    body: 'Open Sans',
  },
  styles: {
    global: {
      body: {
        bg: 'brand.900',
        color: 'brand.100',
      },
    },
  },
})
