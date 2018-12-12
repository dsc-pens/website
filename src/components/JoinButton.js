import React from 'react'

import ExtLink from '../components/ExternalLink'
import { getLink } from '../metadata/links'

export default ({ className }) => (
  <ExtLink
    href={getLink('join-refferal')}
    className={`button is-success ${className}`}
  >
    <i className='e1a-rocket' /> &nbsp; Join now
  </ExtLink>
)
