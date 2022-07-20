import { Flex } from '@chakra-ui/react'
import React from 'react'
import Navigation from '../components/Navigation'

const Layout: React.FC<React.PropsWithChildren> = (props) => {
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
