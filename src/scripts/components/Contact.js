import React from 'react'
import ContactForm from './ContactForm'

const Contact = ({ state, index }) => {

  const activeSection = state.sections.find((section) => section.index == index)
  const isActive = activeSection.active ? 'visible' : ''

  return (
    <section className={`section contact ${isActive}`} data-section={index}>
      <div className="section__inner">
        <h2>Say Hi</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam repellendus quos nihil laboriosam eaque autem, nobis quo voluptas, sed hic cum qui laborum non pariatur quis, obcaecati voluptates eveniet ut.</p>
        <ContactForm/>
      </div>
    </section>
  )
}

export default Contact