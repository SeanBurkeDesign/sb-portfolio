import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Bio from './components/Bio'
import Work from './components/Work'
import Contact from './components/Contact'
import ArrowNav from './components/ArrowNav'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      sections: [
        {
          section: 'Hero',
          index: 0,
          active: true
        },
        {
          section: 'Bio',
          index: 1,
          active: false
        },
        {
          section: 'Work',
          index: 2,
          active: false
        },
        {
          section: 'Contact',
          index: 3,
          active: false
        }
      ]
    }

    this.handleNavClick = this.handleNavClick.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loaded: true })
    }, 0)
  }

  handleNavClick(targetSection) {
    if (!targetSection) return false
    let activeSection = this.state.sections.findIndex((item) => item.section == targetSection)
    let sections = [...this.state.sections]
    sections.forEach((section) => {
      section.active = false
    })
    let activeItem = { ...sections[activeSection] }
    activeItem.active = true
    sections[activeSection] = activeItem
    this.setState({ sections })
  }

  render() {
    const { loaded } = this.state

    return (
      <main className={`main ${loaded && 'app-loaded'}`}>
        <Nav state={this.state} handleClick={this.handleNavClick}/>
        <Hero state={this.state} handleClick={this.handleNavClick} index="0"/>
        <Bio state={this.state} handleClick={this.handleNavClick} index="1"/>
        <Work state={this.state} handleClick={this.handleNavClick} index="2"/>
        <Contact state={this.state} handleClick={this.handleNavClick} index="3"/>
        <ArrowNav state={this.state} handleClick={this.handleNavClick}/>
      </main>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))