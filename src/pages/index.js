import { graphql, Link } from 'gatsby'
import React from 'react'

import JoinButton from '../components/JoinButton'
import PageLayout from '../layouts/PageLayout'

export const query = graphql`
  {
    imgs: allFile(filter: { name: { regex: "/dsc-/" } }) {
      edges {
        node {
          name
          publicURL
        }
      }
    }
  }
`

export default ({ data }) => {
  /** @returns {String} */
  const getImage = imageId =>
    data.imgs.edges
      .map(i => ({ ...i.node }))
      .find(({ name }) => name === imageId).publicURL

  return (
    <PageLayout withFooter={false}>
      <div className='hero is-fullheight-with-navbar is-primary' id='dsc-hero'>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <figure className='image' id='dsc-logo'>
              <img src={getImage('dsc-icon')} alt='DSC PENS' />
            </figure>

            <br />
            <h1 className='title'>Developers, assemble.</h1>
            <p className='dsc-max-tablet'>
              Developer Student Clubs (DSC) is a Google Developers program for
              university students to learn mobile and web development skills.
              DSC PENS is a division of the DSC program initiated by Politeknik
              Elektronika Negeri Surabaya, open for any student from any campus
              or institution.
            </p>
            <br />
            <div className='buttons is-centered'>
              <Link to='/about' className='button is-info'>
                <i className='e1a-woman_singer_tone1' /> &nbsp; Learn more
              </Link>
              <JoinButton />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        #dsc-hero {
          background-image: url('${getImage('dsc-bg')}');
          background-position: bottom center;
          background-size: cover;
        }
        #dsc-logo {
          margin: 0 auto;
          max-width: 192px;
        }
      `}</style>
    </PageLayout>
  )
}
