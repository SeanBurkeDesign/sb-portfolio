import React from 'react'
import Github from './../svg/Github'
import LinkedIn from './../svg/LinkedIn'
import Email from './../svg/Email'

const SocialLink = ({ name, url }) => {

  let icon

  switch (true) {
  case (name == 'Github'):
    icon = <Github/>
    break
  case (name == 'LinkedIn'):
    icon = <LinkedIn/>
    break
  case (name == 'Email'):
    icon = <Email/>
    break
  default: 
    icon = null
    break
  }

  return (
    <a href={url} className="social-links__link" target="_blank">
      {icon}
    </a>
  )
}

export default SocialLink