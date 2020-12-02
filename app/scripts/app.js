import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ArrowNav from './components/ArrowNav'
import Nav from './components/Nav'
import Main from './layout/Main'
import { useKeyboardStatus, useAppStatus } from './utils/hooks'

const App = () => {
  let appLoader = document.getElementById('app-loader')
  let loaded = useAppStatus()
  useKeyboardStatus()

  if (loaded) {
    appLoader.style.opacity = 0
    setTimeout(() => {
      appLoader.remove()
    }, 2000)
  }
    
  return (
    <Router basename="/">
      <Nav />
      <Main />
      <ArrowNav />
    </Router>
  )
}

export default App