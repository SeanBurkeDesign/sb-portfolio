import React from 'react'
import SocialLinks from './SocialLinks'
import { updateLocation } from '../utils/helpers'


const Home = () => {
  updateLocation()
  return (
    <section className="section hero visible">
      <div className="section__inner">
        <h1>Sean Burke</h1>
        <h2>Front End Software Engineer</h2>
        <SocialLinks />
      </div>
    </section>
  )
}

export default Home