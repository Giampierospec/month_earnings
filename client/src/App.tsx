import { ChakraProvider } from '@chakra-ui/react'
import theme from './themes/themes'
import GlobalStyles from './themes/GlobalStyles'
import Fonts from './themes/Fonts'
import RouteSetup from './routes'
import Layout from './layout'
import { BrowserRouter } from 'react-router-dom'

export const App = () => (
  <ChakraProvider resetCSS theme={theme}>
    <GlobalStyles />
    <Fonts />
    <BrowserRouter>
      <Layout>
        <RouteSetup />
      </Layout>
    </BrowserRouter>
  </ChakraProvider>
)
