import React from 'react'
import Navigation from '../components/Navigation'

const Layout: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <>
      <Navigation />
      {props.children}
    </>
  )
}
export default Layout
