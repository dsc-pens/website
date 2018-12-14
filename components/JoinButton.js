import cns from '@sindresorhus/class-names'
import PropTypes from 'prop-types'
import React from 'react'

import Link from './ExternalLink'

const JoinButton = ({ className }) => (
  <Link
    href='https://bit.ly/dscpens-register'
    className={cns('button', 'is-success', className)}
  >
    <i className='e1a-rocket' /> &nbsp; Join now
  </Link>
)

JoinButton.propTypes = {
  className: PropTypes.any,
}

export default JoinButton
