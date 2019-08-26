import Link from 'next/link'
import React from 'react'

import JoinButton from '../components/JoinButton'
import Layout from '../layouts/Layout'

export default () => (
  <Layout withFooter={false}>
    <div className='hero is-fullheight-with-navbar is-primary' id='dsc-hero'>
      <div className='hero-body'>
        <div className='container has-text-centered'>
          <figure className='image' id='dsc-logo'>
            <img src={require('../static/dsc-icon.webp')} alt='DSC PENS' />
          </figure>

          <br />
          <h1 className='title'>Developers, assemble.</h1>
          <p className='dsc-max-tablet'>
            Developer Student Clubs (DSC) is a Google Developers program for
            university students to learn mobile and web development skills. DSC
            PENS is a division of the DSC program initiated by Politeknik
            Elektronika Negeri Surabaya, open for any student from any campus or
            institution.
          </p>
          <br />
          <div className='buttons is-centered'>
            <Link href='/about'>
              <a className='button is-info'>
                <i className='e1a-woman_singer_tone1' /> &nbsp; Learn more
              </a>
            </Link>
            <JoinButton />            
          </div>
        </div>
      </div>
    </div>

    <style jsx>{`
        #dsc-hero {
          background-image: url('${require('../static/dsc-bg.webp')}');
          background-position: bottom center;
          background-size: cover;
        }
        #dsc-logo {
          margin: 0 auto;
          max-width: 192px;
        }
      `}</style>
  </Layout>
)
