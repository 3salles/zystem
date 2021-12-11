import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    brand: {
      300: '#C31011',
      900: '#0C1015',
    },
    borders: {
      200: '#F1BE65',
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
    },
    yellowGreen: {
      50: '#BEBD5F',
      100: '#AEAD47',
      200: '#A09F41',
      300: '#92913C',
      400: '#848336',
      500: '#767630',
      600: '#68682B',
      700: '#5A5A25',
      800: '#4C4C1F',
      900: '#3F3E1A'
    },
    brightRed: {
      50: '#EF4344',
      100: '#EE3132',
      200: '#ED1F20',
      300: '#E51314',
      400: '#D31112',
      500: '#C11011',
      600: '#AF0E0F',
      700: '#9C0D0E',
      800: '#8A0B0C',
      900: '#780A0A'
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
