import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'

const ArrowButton = ({ direction, isDisabled, path }) => {
  const attributes = {
    to: path,
    className: classNames({
      'arrow-nav__link': true,
      'arrow-nav__link--prev': direction === 'prev',
      'arrow-nav__link--next': direction === 'next',
      'disabled': isDisabled
    }),
    tabIndex: isDisabled ? -1 : ''
  }
  const icon = direction === 'next'
    ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.3 84" overflow="visible"><path d="M42.3 42.03782l-1.8-2-36-40-4.5 4 34.2 38-34.2 38 4.5 4 36-40 1.8-2z"/></svg> 
    : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.3 84" overflow="visible"><path d="M1.8 44.03782l36 40 4.5-4-34.2-38 34.2-38-4.5-4-36 40-1.8 2 1.8 2z"/></svg>

  return (
    <Link {...attributes}>
      { icon }
    </Link>
  )
}

export default ArrowButton