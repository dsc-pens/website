import cns from '@sindresorhus/class-names'
import Link from 'next/link'
import React, { useState } from 'react'

import JoinButton from './JoinButton'

const routes = [
  {
    to: '/about',
    icon: 'e1a-woman_singer_tone1',
    content: 'About',
  },
  {
    to: '/programs',
    icon: 'e1a-computer',
    content: 'Programs',
  },
  {
    to: '/teams',
    icon: 'e1a-man_technologist_tone1',
    content: 'Teams',
  },
  {
    to: '/gallery',
    icon: 'e1a-frame_photo',
    content: 'Gallery',
  },
]

export const Padding = () => <div className='dsc-navbar-height' />

export default () => {
  const [navbarState, setNavbarState] = useState(false)

  const toggleState = (newState = !navbarState) => {
    setNavbarState(newState)
  }

  const burgerCns = ['navbar-burger', 'burger']

  return (
    <div className='dsc-navbar-container'>
      <nav className='dsc-navbar has-text-centered'>
        <div className='navbar-brand'>
          <Link href='/'>
            <a className='navbar-item'>
              <strong>DSC PENS</strong> &nbsp;&nbsp; Developer Student Club
            </a>
          </Link>

          <a
            className={cns(...burgerCns, { 'is-active': navbarState })}
            onClick={() => toggleState()}
          >
            <span aria-hidden='true' />
            <span aria-hidden='true' />
            <span aria-hidden='true' />
          </a>
        </div>

        <div className={cns('navbar-menu', { 'is-active': navbarState })}>
          <div className='navbar-end' onClick={() => setNavbarState(false)}>
            {routes.map(({ content, icon, to }) => (
              <Link href={to} key={content}>
                <a className='navbar-item'>
                  <i className={icon} /> &nbsp; {content}
                </a>
              </Link>
            ))}
            <div className='navbar-item'>
              <JoinButton className='is-fullwidth' />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
