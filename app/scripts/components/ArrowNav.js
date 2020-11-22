import React from 'react'
import ArrowButton from './../pieces/ArrowButton'
import { useSelector } from 'react-redux'
import { routes } from '../router/routes'

const ArrowNav = () => {
  const { path } = useSelector((state) => state.location)
  const currentIndex = routes.findIndex((route) => route.path === path)
  const prevIndex = currentIndex > 0 ? currentIndex - 1 : 0
  const nextIndex = currentIndex < routes.length - 1 ? currentIndex + 1 : routes.length - 1
  const prevRoute = routes[prevIndex]
  const nextRoute = routes[nextIndex]

  const buttons = [
    {
      direction: 'prev',
      isDisabled: currentIndex < 1,
      routePath: prevRoute.path,
    },
    {
      direction: 'next',
      isDisabled: currentIndex >= routes.length - 1,
      routePath: nextRoute.path,
    }
  ]

  return (
    <nav className="arrow-nav">
      <div className="arrow-nav__inner">
        {buttons.map((button, index) => 
          <ArrowButton
            key={index}
            direction={button.direction}
            isDisabled={button.isDisabled}
            path={button.routePath}
          />
        )}
      </div>
    </nav>
  )
}

export default ArrowNav