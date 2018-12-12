import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { RoutesFragment } from './routes'

export default () => (
  <Router>
    <Route
      render={({ location }) => (
        <div className='dsc-container'>
          <Navbar />
          <div className='dsc-container-children'>
            <RoutesFragment />
          </div>
          {location.pathname !== '/' && <Footer />}
        </div>
      )}
    />
  </Router>
)
