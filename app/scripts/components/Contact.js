import React from 'react'
import { updateLocation } from '../utils/helpers'
import ContactForm from './ContactForm'

const Contact = () => {
  updateLocation()
  return (
    <section className="section contact visible">
      <div className="section__inner">
        <h2>Say Hi</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam repellendus quos nihil laboriosam eaque autem, nobis quo voluptas, sed hic cum qui laborum non pariatur quis, obcaecati voluptates eveniet ut.</p>
        <ContactForm/>
      </div>
    </section>
  )
}

export default Contact