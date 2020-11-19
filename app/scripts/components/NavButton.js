import React from 'react'

const NavButton = ({ className, targetSection, handleClick }) => {

  return (
    <button className={`button ${className ? className : ''}`} type="button" onClick={() => (handleClick(targetSection))}>
      { targetSection }
    </button>
  )
}

export default NavButton

