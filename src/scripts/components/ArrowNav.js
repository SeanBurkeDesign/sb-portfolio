import React from 'react'
import ArrowButton from './../pieces/ArrowButton'

const ArrowNav = ({ state, handleClick }) => {

  const sections = state.sections
  const index = sections.find((section) => section.active == true).index
  const nextIndex = sections.find((section) => section.index == index + 1) || null
  const prevIndex = sections.find((section) => section.index == index - 1) || null

  return (
    <nav className="arrow-nav">
      <div className="arrow-nav__inner">
        <ArrowButton
          direction="<"
          isDisabled={index < 1}
          targetSection={prevIndex ? prevIndex.section : {}}
          handleClick={handleClick}
        />
        <ArrowButton
          direction=">"
          isDisabled={index >= sections.length - 1}
          targetSection={nextIndex ? nextIndex.section : {}}
          handleClick={handleClick}
        />
      </div>
    </nav>
  )
}

export default ArrowNav