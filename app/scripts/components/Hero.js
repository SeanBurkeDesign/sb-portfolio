import React from 'react'
import SocialLinks from './SocialLinks'

const Hero = ({ state, index }) => {

  const activeSection = state.sections.find((section) => section.index == index)
  const isActive = activeSection.active ? 'visible' : ''

  return (
    <section className={`section hero ${isActive}`} data-section={index}>
      <div className="section__inner">
        <h1>Sean Burke</h1>
        <h2>Front End Software Engineer</h2>
        <SocialLinks />
      </div>
    </section>
  )
}

export default Hero