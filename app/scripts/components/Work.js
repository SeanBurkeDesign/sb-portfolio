import React from 'react'
import { updateLocation } from '../utils/helpers'

const Work = () => {
  updateLocation()
  return (
    <section className="section work visible">
      <div className="section__inner">
        <h2>Recent Projects</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae aperiam quae atque, consequatur harum incidunt nobis, et illum modi optio eum delectus. Placeat, culpa illum ipsum molestias consectetur quidem provident.</p>
      </div>
    </section>
  )
}

export default Work