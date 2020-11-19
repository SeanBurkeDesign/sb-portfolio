import React from 'react'
import Logo from './../pieces/Logo'
import NavButton from './NavButton'

const Nav = ({ handleClick }) => {

  const targets = ['Bio', 'Work', 'Contact']

  return (
    <nav className="nav">
      <div className="nav__inner">
        <div className="nav__logo">
          <Logo targetSection="Hero" handleClick={handleClick}/>
        </div>
        <div className="nav__links">
          {targets.map((target, index) =>
            <NavButton key={index} className="nav__link" targetSection={target} handleClick={handleClick}/>
          )}
        </div>
      </div>
    </nav>
  )

}

export default Nav