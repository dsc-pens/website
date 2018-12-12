import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'

export default class Layout extends React.Component {
  static propTypes = {
    pageTitle: PropTypes.string,
  }

  static defaultProps = {
    pageTitle: 'Hello, world',
  }

  render() {
    return (
      <>
        <Helmet>
          <title>{this.props.pageTitle} - DSC PENS</title>
        </Helmet>
        {this.props.children}
      </>
    )
  }
}
