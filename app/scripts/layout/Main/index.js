import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { Route } from 'react-router-dom'
import { routes } from '../../router/routes'
import { useCurrentLocation } from '../../utils/hooks'


const Main = ({ loaded }) => {

  useCurrentLocation()

  return (
    <main className={`main ${loaded && 'app-loaded'}`}>
      {routes.map(({ path, exact, Component }) => (
        <Route key={path} exact={exact} path={path}>
          {({ match }) => (
            <CSSTransition
              appear={true}
              in={match != null}
              timeout={{
                appear: 1000,
                enter: 1000,
                exit: 500
              }}
              classNames="fade"
              unmountOnExit
            >
              <Component />
            </CSSTransition>
          )}
        </Route>
      ))}
    </main>
  )
}

export default Main
