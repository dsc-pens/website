import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'
import { Fade } from 'react-reveal'

import Footer from '../components/Footer'

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        siteUrl
        description
      }
    }
    file(name: { regex: "/dsc-preview/" }) {
      ogImage: publicURL
    }
  }
`

/**
 * @param {React.Props} props
 */
const PageLayout = props => (
  <StaticQuery
    query={query}
    render={({ site, file }) => {
      const { ogImage } = file
      const { title, siteUrl, description } = site.siteMetadata
      const {
        children,
        pageTitle,
        pageDescription,
        pageImage,
        withFooter,
      } = props

      return (
        <Fade duration={300}>
          <>
            <Helmet>
              <title>{`${pageTitle} - ${title}`}</title>
              <meta
                name='description'
                content={pageDescription || description}
              />
              <meta name='image' content={pageImage || ogImage} />

              <meta property='og:url' content={siteUrl} />
              <meta property='og:type' content='website' />
              <meta property='og:title' content={`${pageTitle} - ${title}`} />
              <meta
                property='og:description'
                content={pageDescription || description}
              />
              <meta property='og:image' content={pageImage || ogImage} />
            </Helmet>

            <div className='dsc-container-children'>{children}</div>
            {withFooter && <Footer />}
          </>
        </Fade>
      )
    }}
  />
)

PageLayout.propTypes = {
  pageTitle: PropTypes.string,
  pageDescription: PropTypes.string,
  pageImage: PropTypes.string,
  withFooter: PropTypes.bool,
}

PageLayout.defaultProps = {
  pageTitle: 'Hello, world!',
  withFooter: true,
}

export default PageLayout
