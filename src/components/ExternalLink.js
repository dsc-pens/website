import React from 'react'

/** @param {React.Props} props */
const ExternalLink = props => (
  <a target='_blank' rel='noopener noreferrer' {...props}>
    {props.children}
  </a>
)

export default ExternalLink
