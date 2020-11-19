import React from 'react'
import SocialLink from './../pieces/SocialLink'

const SocialLinks = () => {

  let links = [
    {
      name: 'Github',
      url: 'https://github.com/seanburkedesign'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/seanburkedesign/'
    },
    {
      name: 'Email',
      url: 'mailto:sean@seanburkedesign.com'
    }
  ]

  return (
    <div className="social-links">
      {links.map((link, index) =>
        <SocialLink key={index}
          name={link.name}
          url={link.url}
        />
      )}
    </div>
  )
}

export default SocialLinks