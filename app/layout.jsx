import React from 'react'
import '@styles/global.css'
import NavBar from '@components/NavBar'

const RootLayout = ({children}) => {
  return (
<html>
    <head>

    </head>
    <body class="bg-gray-300">
      <NavBar/>
        {children}
    </body>
</html>
  )
}

export default RootLayout
