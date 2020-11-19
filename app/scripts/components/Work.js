import React from 'react'

const Work = ({ state, index }) => {

  const activeSection = state.sections.find((section) => section.index == index)
  const isActive = activeSection.active ? 'visible' : ''

  return (
    <section className={`section work ${isActive}`} data-section={index}>
      <div className="section__inner">
        <h2>Recent Projects</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae aperiam quae atque, consequatur harum incidunt nobis, et illum modi optio eum delectus. Placeat, culpa illum ipsum molestias consectetur quidem provident.</p>
      </div>
    </section>
  )
}

export default Work