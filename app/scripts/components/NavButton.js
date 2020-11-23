import React from 'react'
import { NavLink } from 'react-router-dom'

const NavButton = ({ path, exact, className, name }) => {  
  return (
    <NavLink
      to={path}
      exact={exact}
      className={`button ${className ?? ''}`}
      activeClassName={`${className}--active`}
    >
      {name}
    </NavLink>
  )
}

export default NavButton

