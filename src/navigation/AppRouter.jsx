import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { HOME_ROUTE, LOGIN_ROUTE } from './constants'
import { privateRoutes, publicRoutes } from './routes'
import { useAuth } from '../context/AuthContext'

const AppRouter = () => {
  const { currentUser } = useAuth()
  const user = currentUser

  return user ? (
    <Switch>
      {privateRoutes.map(({ path, component }) => (
        <Route key={path} path={path} component={component} exact={true} />
      ))}
      <Redirect to={HOME_ROUTE} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({ path, component }) => (
        <Route key={path} path={path} component={component} exact={true} />
      ))}
      <Redirect to={LOGIN_ROUTE} />
    </Switch>
  )
}

export default AppRouter
