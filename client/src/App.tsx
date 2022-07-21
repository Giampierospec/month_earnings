import { ChakraProvider, Spinner } from '@chakra-ui/react'
import theme from './themes/themes'
import GlobalStyles from './themes/GlobalStyles'
import Fonts from './themes/Fonts'
import RouteSetup from './routes'
import Layout from './layout'
import { BrowserRouter } from 'react-router-dom'
import { useEffect } from 'react'
import { getUser } from './actions'
import { connect } from 'react-redux'
import { Actions } from './interfaces/general'

const App: React.FC<Partial<Actions>> = (props) => {
  useEffect(() => {
    props.getUser()
  }, [props])
  return (
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
}
export default connect(null, { getUser })(App)
