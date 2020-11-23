import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { routes } from '../../router/routes'
import { useCurrentLocation } from '../../utils/hooks'


const Main = ({ loaded }) => {

  useCurrentLocation()

  return (
    <main className={`main ${loaded && 'app-loaded'}`}>
      <Switch>
        <Route exact path="/" component={Hero} />
        {routes.map((route) => (
          <Route
            key={route.name}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
        {/* <Route path='*' component={PageNotFound} /> */}
      </Switch>
    </main>
  )
}

export default Main
