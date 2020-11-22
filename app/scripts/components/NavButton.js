import React from 'react'
import { Link } from 'react-router-dom'

const NavButton = ({ path, className, name }) => {  
  return (
    <Link to={path} className={`button ${className ?? ''}`}>
      {name}
    </Link>
  )
}

export default NavButton

