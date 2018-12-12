import cns from '@sindresorhus/class-names'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import { navbarRoutes as routes } from '../routes'
import JoinButton from './JoinButton'

export class Padding extends React.Component {
  render() {
    return <div className='dsc-navbar-height' />
  }
}
export default class extends React.Component {
  state = {
    navbarState: false,
  }

  toggleNavbar(state) {
    this.setState({
      navbarState: state === undefined ? !this.state.navbarState : state,
    })
  }

  render() {
    return (
      <div className='dsc-navbar-container'>
        <nav className='dsc-navbar has-text-centered'>
          <div className='navbar-brand'>
            <Link to='/' className='navbar-item'>
              <strong>DSC PENS</strong> &nbsp;&nbsp; Developer Student Club
            </Link>
            <a
              className={cns('navbar-burger', 'burger', {
                'is-active': this.state.navbarState,
              })}
              onClick={() => this.toggleNavbar()}
            >
              <span aria-hidden='true' />
              <span aria-hidden='true' />
              <span aria-hidden='true' />
            </a>
          </div>
          <div
            className={cns('navbar-menu', {
              'is-active': this.state.navbarState,
            })}
          >
            <div
              className='navbar-end'
              onClick={() => this.toggleNavbar(false)}
            >
              {routes.map(({ icon, name, path }) => (
                <NavLink
                  key={name}
                  to={path}
                  className='navbar-item'
                  activeClassName='is-active'
                >
                  <i className={icon} /> &nbsp; {name}
                </NavLink>
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
}
