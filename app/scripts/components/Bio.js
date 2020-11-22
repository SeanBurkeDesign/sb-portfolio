import React from 'react'
import { updateLocation } from '../utils/helpers'

const Bio = () => {
  updateLocation()
  return (
    <section className="section bio visible">
      <div className="section__inner">
        <h2>My Story</h2>
        <p>Lorem ipsum doloår, sit amet consectetur adipisicing elit. Recusandae, reprehenderit cumque unde, ad quibusdam cupiditate eos iure asperiores veniam mollitia dolore iste commodi earum est, obcaecati harum voluptates incidunt. Ipsam.</p>
      </div>
    </section>
  )
}

export default Bio