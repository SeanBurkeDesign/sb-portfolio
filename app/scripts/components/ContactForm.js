import React from 'react'

import firebase from 'firebase/app'
import 'firebase/firestore'
import { firebaseConfig } from '../../../config'


firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      values: {
        name: '',
        email: '',
        message: ''
      },
      hasError: false,
      isSubmitting: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    let name = event.target.name
    let value = event.target.value

    this.setState({
      values: { 
        ...this.state.values, 
        [name]: value
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const name = this.state.values.name
    const email = this.state.values.email
    const message = this.state.values.message
    this.setState({ isSubmitting: true })
    db.collection('contacts').add({
      to: 'sean@seanburkedesign.com',
      message: {
        subject: 'New Firebase contact',
        html: `
          name: ${name}<br>
          email: ${email}<br>
          message: ${message}
        `
      }
    })
      .then(() => {
        this.setState({ 
          hasError: false,
          isSubmitting: false,
        })
        form.reset()
        console.log('Thank you.')
      })
      .catch(() => {
        this.setState({ 
          isSubmitting: false,
          hasError: true,
          errorMessage: 'Sorry. Something went wrong. Please try again.'
        })
      })
  }

  render() {
    return (
      <form className="contact-form" action="#" onSubmit={((event) => this.handleSubmit(event))}>
        <div className="input-group">
          <label htmlFor="name">What's your name? <span>Ooops. Is that a name?</span></label>
          <input type="text" id="name" name="name" required onChange={((event) => this.handleChange(event))}/>
        </div>
        <div className="input-group">
          <label htmlFor="email">How can I reach you?</label>
          <input type="email" id="email" name="email" required onChange={((event) => this.handleChange(event))}/>
        </div>
        <div className="input-group">
          <label htmlFor="message">What can I help you with?</label>
          <textarea id="message" name="message" cols="30" rows="10" required onChange={((event) => this.handleChange(event))}></textarea>
        </div>
        <input className="button button--primary" type="submit" value={ this.state.isSubmitting ? 'Sending...' : 'Send It!'}/>
        {this.state.hasError ? <p className="form-error">{ this.state.errorMessage }</p> : ''}
      </form>
    )
  }
}

export default ContactForm