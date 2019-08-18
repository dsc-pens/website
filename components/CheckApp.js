import cns from '@sindresorhus/class-names'
import PropTypes from 'prop-types'
import React from 'react'

import Link from './ExternalLink'

const CheckApp = ({ className }) => (
  <Link
    href='https://dscpens-event.firebaseapp.com/'
    className={cns('button', 'is-warning', className)}
  >
  <i className='e1a-desktop' /> &nbsp; Open Event Platform App   
  </Link>
)

CheckApp.propTypes = {
  className: PropTypes.any,
}

export default CheckApp
