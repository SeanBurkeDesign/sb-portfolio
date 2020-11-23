import Home from '../components/Home'
import Bio from '../components/Bio'
import Work from '../components/Work'
import Contact from '../components/Contact'

export const home = {
  path: '/',
  Component: Home,
  name: 'Home',
  exact: true
}

export const bio = {
  path: '/bio',
  Component: Bio,
  name: 'Bio',
  exact: true
}

export const work = {
  path: '/work',
  Component: Work,
  name: 'Work',
  exact: true
}

export const contact = {
  path: '/contact',
  Component: Contact,
  name: 'Contact',
  exact: true
}

export const routes = [home, bio, work, contact]
