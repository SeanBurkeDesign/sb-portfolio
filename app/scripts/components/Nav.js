import React from 'react'
import { routes as navRoutes } from '../router/routes' 
import Logo from './../pieces/Logo'
import NavButton from './NavButton'
  
const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__inner">
        <div className="nav__logo">
          <Logo path="/"/>
        </div>
        <div className="nav__links">
          {navRoutes.map((route) =>
            <NavButton key={route.path} exact={route.exact} className="nav__link" name={route.name} path={route.path}/>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Nav