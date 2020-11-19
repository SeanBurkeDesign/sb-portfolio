import React from 'react'

const ArrowNext = ({ isDisabled, targetSection, handleClick }) => {

  return (
    <button
      className={`arrow-nav__link arrow-nav__link--next ${isDisabled ? 'disabled' : ''}`}
      type="button"
      onClick={() => (handleClick(targetSection))}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.3 84" overflow="visible">
        <path d="M42.3 42.03782l-1.8-2-36-40-4.5 4 34.2 38-34.2 38 4.5 4 36-40 1.8-2z"/>
      </svg>
    </button>
  )
  
}

export default ArrowNext