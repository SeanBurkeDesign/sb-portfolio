import React from 'react'

const Bio = ({ state, index }) => {

  const activeSection = state.sections.find((section) => section.index == index)
  const isActive = activeSection.active ? 'visible' : ''

  return (
    <section className={`section bio ${isActive}`} data-section={index}>
      <div className="section__inner">
        <h2>My Story</h2>
        <p>Lorem ipsum doloår, sit amet consectetur adipisicing elit. Recusandae, reprehenderit cumque unde, ad quibusdam cupiditate eos iure asperiores veniam mollitia dolore iste commodi earum est, obcaecati harum voluptates incidunt. Ipsam.</p>
      </div>
    </section>
  )

}

export default Bio