import cns from '@sindresorhus/class-names'
import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Link from '../components/ExternalLink'

const query = graphql`
  {
    joinRef: linksJson(id: { eq: "join-refferal" }) {
      url
    }
  }
`

const JoinButton = ({ className }) => (
  <StaticQuery
    query={query}
    render={({ joinRef }) => (
      <Link
        href={joinRef.url}
        className={cns('button', 'is-success', className)}
      >
        <i className='e1a-rocket' /> &nbsp; Join now
      </Link>
    )}
  />
)

JoinButton.propTypes = {
  className: PropTypes.string,
}

JoinButton.defaultProps = {
  className: null,
}

export default JoinButton
