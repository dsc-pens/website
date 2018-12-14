import React from 'react'

import Link from './ExternalLink'

export default () => (
  <footer className='footer has-background-white'>
    <div className='content has-text-centered'>
      <small className='has-text-grey'>
        Copyright &copy; DSC PENS 2018.
        <br />
        Hosted on <Link href='https://firebase.google.com'>
          Firebase
        </Link> and <Link href='https://zeit.co/now'>Zeit Now</Link>. Source
        code available on{' '}
        <Link href='https://github.com/dsc-pens/website'>GitHub</Link>.
        <br />
        <br />
        <Link href='https://travis-ci.com/dsc-pens/website'>
          <img
            src='https://travis-ci.com/dsc-pens/website.svg?original&branch=master'
            alt='Travis CI Build Status'
          />
        </Link>
      </small>
    </div>
  </footer>
)
