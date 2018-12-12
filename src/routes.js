import React from 'react'
import Loadable from 'react-loadable'
import { Route, Switch } from 'react-router-dom'

import Loading from './components/Loading'

const routes = [
  {
    exact: true,
    icon: 'e1a-house',
    loader: () => import('./pages/home'),
    name: 'Home',
    path: '/',
  },
  {
    icon: 'e1a-woman_singer_tone1',
    loader: () => import('./pages/about'),
    name: 'About',
    navbarVisible: true,
    path: '/about',
  },
  {
    icon: 'e1a-computer',
    loader: () => import('./pages/programs'),
    name: 'Programs',
    navbarVisible: true,
    path: '/programs',
  },
  {
    icon: 'e1a-man_technologist_tone1',
    loader: () => import('./pages/teams'),
    name: 'Teams',
    navbarVisible: true,
    path: '/teams',
  },
  {
    icon: 'e1a-frame_photo',
    loader: () => import('./pages/gallery'),
    name: 'Gallery',
    navbarVisible: true,
    path: '/gallery',
  },
  {
    loader: () => import('./pages/_redirect'),
    name: 'Redirect to Home',
  },
]

export const navbarRoutes = routes.filter(r => r.navbarVisible)

export const RoutesFragment = () => (
  <Switch>
    {routes.map(({ loader, name, navbarVisible, ...route }) => (
      <Route
        key={name}
        {...route}
        component={Loadable({
          loader,
          loading: () => <Loading />,
        })}
      />
    ))}
  </Switch>
)

export default routes
