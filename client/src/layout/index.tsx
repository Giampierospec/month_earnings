import { Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navigation from '../components/Navigation'

const Layout: React.FC<React.PropsWithChildren> = (props) => {
  const location = useLocation()
  useEffect(() => {
    document.title = `${location.pathname
      .replace('/', '')
      .toUpperCase()} | Month Earnings`
  }, [location])
  return (
    <>
      <Navigation />
      <Flex py="20px" flexDirection="column">
        {props.children}
      </Flex>
    </>
  )
}
export default Layout
