import '../stylesheets/style.scss'

import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'

/**
 * @param {React.Props} props
 */
const AppLayout = ({ children }) => (
  <>
    <Helmet>
      <meta charset='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta http-equiv='X-UA-Compatible' content='ie=edge' />
    </Helmet>

    <div className='dsc-container'>
      <Navbar />
      {children}
    </div>
  </>
)

export default AppLayout
