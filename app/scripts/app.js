import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ArrowNav from './components/ArrowNav'
import Nav from './components/Nav'
import Main from './layout/Main'
import { useKeyboardStatus, useLoadingStatus } from './utils/hooks'

const App = () => {
  const { loadingState } = useLoadingStatus()
  useKeyboardStatus()

  return (
    <Router basename="/">
      <Nav />
      <Main loaded={loadingState}/>
      <ArrowNav />
    </Router>
  )
}

export default App