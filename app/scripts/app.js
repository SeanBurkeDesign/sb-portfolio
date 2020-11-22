import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ArrowNav from './components/ArrowNav'
import Nav from './components/Nav'
import Main from './layout/Main'

const App = () => {
  return (
    <Router basename="/">
      <Nav />
      <Main loaded={true}/>
      <ArrowNav />
    </Router>
  )
}

export default App