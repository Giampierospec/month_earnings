import { extendTheme } from '@chakra-ui/react'
const breakpoints = {
  sm: '375px',
  md: '768px',
  lg: '1024px',
  xl: '1440px',
}
const fonts = { body: 'Open Sans, sans-serif', heading: 'Oswald, sans-serif' }

const theme = extendTheme({
  colors: {
    primary: '#0078AA',
    secondary: '#243A73',
  },
  fonts,
  breakpoints,
})

export default theme
