import { Global } from '@emotion/react'
import React from 'react'

const GlobalStyles: React.FC = () => {
  return (
    <Global
      styles={`
      html {
          min-height: 100vh;
          scroll-behavior: smooth;
        }
        body {
          min-height: 100vh;
        }
    `}
    />
  )
}

export default GlobalStyles
