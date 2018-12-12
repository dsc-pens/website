import React from 'react'

import Link from './ExternalLink'

export default () => (
  <footer className='footer has-background-white'>
    <div className='content has-text-centered'>
      <small className='has-text-grey'>
        Copyright &copy; DSC PENS 2018.
        <br />
        Hosted on <Link href='https://zeit.co/now'>Zeit Now</Link>, source code
        available on{' '}
        <Link href='https://github.com/dsc-pens/website'>GitHub</Link>.
      </small>
    </div>
  </footer>
)
