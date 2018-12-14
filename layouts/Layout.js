import NextSEO from 'next-seo'
import PropTypes from 'prop-types'
import React from 'react'

import Footer from '../components/Footer'

/** @param {React.Props} props */
const Layout = ({ children, title, description, withFooter }) => (
  <>
    <NextSEO config={{ title: `${title} - DSC PENS`, description }} />

    <div className='dsc-container-children'>{children}</div>
    {withFooter && <Footer />}
  </>
)

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  withFooter: PropTypes.bool,
}

Layout.defaultProps = {
  title: 'Hello, world!',
  withFooter: true,
}

export default Layout
